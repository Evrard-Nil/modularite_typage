import { Char } from "../Char";

export interface Visiteur<T> {

  casVide(): T;
  estMotNonVide(pCaractere: Char, pReste: T): T;
  estConcat(pGauche: T, pDroite: T): T;
}