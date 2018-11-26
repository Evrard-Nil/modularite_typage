
import { Char } from "../Char";
import { Mot } from "./mot";

export class MotNonVideInductif extends Mot {

  private first: Char;
  private suiteMot: Mot;

  public constructor(first: Char, suite: Mot) {
    super();
    this.first = first;
    this.suiteMot = suite;
  }

  public taille(): number {
    return 1 + this.suiteMot.taille();
  }

  public estCons(): boolean {
    return true;
  }

  public premiereLettre(): Char {
    return this.first;
  }

  public suite(): Mot {
    return this.suiteMot;
  }

  public getValue(): string {
    return this.premiereLettre.toString() + this.suiteMot.getValue();
  }

}