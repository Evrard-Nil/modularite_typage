import { Char } from "../Char";
import { MotNonVide } from './MotNonVide';
import { MotVide } from './MotVide';
import { MotConcat } from './MotConcat';

export abstract class Mot {
  estMotNonVide(): boolean {
    return false;
  }
  estConcat(): boolean {
    return false;
  }

  element(): Char {
    throw new Error();
  }
  reste(): Char {
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
}