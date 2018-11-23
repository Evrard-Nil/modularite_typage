import { Char } from './Char'
import { MotVideInductif } from './MotVideInductif';
/*
* Mot ::= Vide | cons(char, Mot) | Concatenation(Mot, Mot)
*/
export abstract class Mot {

  abstract getValue(): String;
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

  motInduct(Char n): Mot {
    return new MotNonVideInductif(n, this);
  }

  concat(Mot mot): Mot {
    return new MotConcat(this, mot);
  }
}