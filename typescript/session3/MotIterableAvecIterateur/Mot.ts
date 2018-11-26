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
  estConcat(): boolean {
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

  mot(n: Char): Mot {
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
}