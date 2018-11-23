import { Char } from "./Char";
import { Mot } from "./mot";

export class MotNonVideInductif extends Mot {

  private first: Char;
  private suiteMot: Mot;

  public MotNonVideInductif(first: Char, suite: Mot) {
    this.first = first;
    this.suiteMot = suite;
  }

  public taille(): number {
    return 1 + this.suiteMot.taille();
  }

  estCons(): boolean {
    return true;
  }
}