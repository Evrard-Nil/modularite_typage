import { Mot } from "./Mot";
import { Char } from "../Char";


export class MotNonVide extends Mot {

  private premiereLettre: Char;
  private resteMot: Mot;
  private tailleMot: number;

  public constructor(i: Char, ens: Mot) {
    super();
    this.premiereLettre = i;
    this.resteMot = ens;
    this.tailleMot = 1 + ens.taille();
  }

  public taille(): number {
    return this.tailleMot;
  }

  public estMotNonVide(): boolean {
    return true;
  }

  public element(): Char {
    return this.premiereLettre;
  }

  public reste(): Mot {
    return this.resteMot;
  }
}