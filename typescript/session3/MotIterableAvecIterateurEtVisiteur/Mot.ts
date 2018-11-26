import { Char } from "../Char";
import { MotNonVide } from './MotNonVide';
import { MotVide } from './MotVide';
import { MotConcat } from './MotConcat';
import { Iterateur } from "./Iterateur";

export abstract class Mot implements Iterable<Char>{
  public constructor() {

  }
  estMotNonVide(): boolean {
    return false;
  }
  casUnion(): boolean {
    return false;
  }

  element(): Char {
    throw new Error();
  }
  reste(): Mot {
    throw new Error();
  }

  gauche(): Mot {
    throw new Error();
  }

  droit(): Mot {
    throw new Error();
  }

  vide(): Mot {
    return MotVide.VIDE;
  }


  motNonVide(n: Char): Mot {
    return new MotNonVide(n, this);
  }

  concat(ens: Mot): Mot {
    return new MotConcat(this, ens);
  }

  abstract taille(): number;

  estVide(): boolean {
    return this.taille() == 0;
  }

  iterateur(): Iterateur {
    return new Iterateur(this);
  }

  [Symbol.iterator](): Iterator<Char> {
    return this.iterateur();
  }

  acceuilRecursif(v: Visiteur<T>): <T> T {
    if (this.estVide()) {
      return v.casVide();
    }
    return v.estMotNonVide(this.element(), this.reste().acceuilRecursif());
  }

  acceuil(v: Visiteur<T>): <T> T {
    let r: T = v.casVide();
    for (let x in this) {
      r = v.estMotNonVide(x, r);
    }
    return r;
  }

  accueilRecursif(casVide: Supplier<T>, estMotNonVide: BiFunction<Char, T, T>): <T> T {
    if (this.estVide()) {
      return casVide.get();
    }
    return estMotNonVide.apply(this.element(), this.reste().accueilRecursif(casVide, estMotNonVide));
  }

  accueil(casVide: Supplier<T>, estMotNonVide: BiFunction<Char, T, T>): <T> T {
    let r = casVide.get();
    for (let x in this) {
      r = estMotNonVide.apply(x, r);
    }
    return r;
  }

  filtrageRecursif(casVide: Supplier<T>, estMotNonVide: BiFunction<Char, Mot, T>): <T> T {
    if (this.estVide()) {
      return casVide.get();
    }
    return estMotNonVide.apply(this.element(), this.reste());
  }

  filtrage(casVide: Supplier<T>, estMotNonVide: BiFunction<Char, Mot, Function<T, T>>): <T> T {
    let r = casVide.get();
    let arg = this.vide();
    let courant = this;
    while (!courant.estVide()) {
      let e = courant.element();
      r = estMotNonVide.apply(e, arg).apply(r);
      arg = arg.motNonVide(e);
      courant = courant.reste();
    }
    return r;
  }
}