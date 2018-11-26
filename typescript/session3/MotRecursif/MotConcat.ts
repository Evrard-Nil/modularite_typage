import { Mot } from "./mot";
import { Char } from "../Char";

export class MotConcat extends Mot {
  private motGauche: Mot;
  private motDroit: Mot;

  public constructor(g: Mot, d: Mot) {
    super();
    this.motGauche = g;
    this.motDroit = d;
  }

  public taille(): number {
    return this.motGauche.taille() + this.motDroit.taille();
  }

  public estConcat(): boolean {
    return true;
  }

  public premiereLettre(): Char {
    if (this.estVide()) {
      throw new Error("Unsupported exception");
    }
    if (this.motGauche.estVide) return this.motDroit.premiereLettre();
    return this.motGauche.premiereLettre();
  }

  public suite(): Mot {
    if (this.estVide()) {
      throw new Error("Unsupported exception");
    }
    if (this.motGauche.estVide) return this.motDroit.suite();
    return new MotConcat(this.motGauche.suite(), this.motDroit)
  }

  public gauche(): Mot {
    return this.motGauche;
  }

  public droit(): Mot {
    return this.motDroit;
  }

  public getValue(): string {
    return this.motGauche.getValue().concat(this.motDroit.getValue());
  }
}