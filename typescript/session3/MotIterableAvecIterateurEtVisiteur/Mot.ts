import { Char } from "../Char";
import { MotNonVide } from './MotNonVide';
import { MotVide } from './MotVide';
import { MotConcat } from './MotConcat';
import { Iterateur } from "./Iterateur";
import { Visiteur } from "./Visiteur";

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
  //Visiteur

  accept<T>(v: Visiteur<T>): T {
    let r: T = v.casVide();
    let i = this.iterateur();
    while (i.aSuivant()) {
      let x = i.suivant();
      r = v.estMotNonVide(x, r);
    }
    return r;
  }

  acceptInductive<T>(v: Visiteur<T>): T {
    if (this.estVide()) {
      return v.casVide();
    }
    return v.estMotNonVide(this.element(), this.reste().acceptInductive(v));
  }

  //Filtres

  filtrageRecursif<T>(casVide: () => T, casMotPrecedeCaractere: (c: Char, m: Mot) => T): T {
    if (this.estVide()) {
      return casVide();
    }
    return casMotPrecedeCaractere(this.element(), this.reste());
  }

  filtrage<T>(casVide: () => T, casMotPrecedeCaractere: (c: Char, m: Mot) => (t: T) => T): T {
    let r: T = casVide();
    let arg: Mot = this.vide();
    let courant: Mot = this;
    while (!courant.estVide()) {
      let e: Char = courant.element();
      r = casMotPrecedeCaractere(e, arg)(r);
      arg = arg.motNonVide(e);
      courant = courant.reste();
    }
    return r;
  }

}