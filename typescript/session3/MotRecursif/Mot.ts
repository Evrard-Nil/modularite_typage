import { Char } from '../Char'
import { MotVideInductif } from './MotVideInductif';
import { MotNonVideInductif } from './MotNonVideInductif';
import { MotConcat } from './MotConcat';

/*
* Mot ::= Vide | cons(char, Mot) | Concatenation(Mot, Mot)
*/
export abstract class Mot {

  abstract getValue(): string;
  abstract taille(): number;

  estVide(): boolean {
    return false;
  }

  estInductif(): boolean {
    return false;
  }

  estCons(): boolean {
    return false;
  }

  estConcat(): boolean {
    return false;
  }

  // Destructeurs
  premiereLettre(): Char {
    throw new Error("Unsupported Exception");
  }

  suite(): Mot {
    throw new Error("Unsupported Exception");
  }

  gauche(): Mot {
    throw new Error("Unsupported Exception");
  }

  droit(): Mot {
    throw new Error("Unsupported Execption");
  }

  // Constructeurs

  vide(): Mot {
    return MotVideInductif.VIDE;
  }

  motInduct(n: Char): Mot {
    return new MotNonVideInductif(n, this);
  }

  concat(mot: Mot): Mot {
    return new MotConcat(this, mot);
  }
}