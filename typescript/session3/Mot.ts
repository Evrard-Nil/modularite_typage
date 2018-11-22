import { Char } from "./Char";

/*
* Mot ::= Vide | cons(char, Mot) | Concatenation(Mot, Mot)
*/


export abstract class Mot implements Iterable<Char> {

  // Sélecteurs 
  casVide(): boolean {
    return false;
  }
  casCons(): boolean {
    return false;
  }
  casConcatenation(): boolean {
    return false;
  }

  // Projecteurs
  char(): Char {
    throw new Error('No char in Mot');
  }
  reste(): Mot {
    throw new Error('No Mot in Mot');
  }
  motGauce(): Mot {
    throw new Error();
  }
  motDroite(): Mot {
    throw new Error();
  }

  //Iterateurs

  iterateur(): IterateurMot {
    return new IterateurMot(this);
  }

  [Symbol.iterator](): Iterator<Char> {
    return this.iterateur;
  }

  //Constructeurs
  vide(): Mot {
    return MotVide.SINGLETON;
  }
  cons(c: Char): Mot {
    return new Cons(c, this);
  }
  concatenation(m1: Mot, m2: Mot): Mot {
    return new Concatenation(m1, m2);
  }

  abstract taille(): number;

  estVide(): boolean {
    return this.taille() == 0;
  }
}