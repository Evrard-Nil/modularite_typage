import { Char } from '../Char';
import { Mot } from './mot';

export interface FabriqueMot {
  createInduct(lettre: Char, next: Mot): Mot;
  createFromConcat(m1: Mot, m2: Mot): Mot;
  createVide(): Mot;
  createFromString(mot: string): Mot;
}