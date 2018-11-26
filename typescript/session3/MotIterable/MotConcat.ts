import { Mot } from "./mot";
import { Char } from "../Char";

export class MotConcat extends Mot {

  private motGauche: Mot;
  private motDroit: Mot;
  private tailleMot: number;

  private premiereLettre: Char;
  private resteMot: Mot;


  public constructor(g: Mot, d: Mot) {
    super();
    this.motGauche = g;
    this.motDroit = d;
    this.tailleMot = g.taille() + d.taille();
  }

  public taille(): number {
    return this.tailleMot;
  }

  public estConcat(): boolean {
    return true;
  }

  private decomposer(): void {
    var courant: Mot = this;
    while (true) {
      if (courant.estMotNonVide()) { // Cons
        this.resteMot = courant.reste();
        this.premiereLettre = courant.element();
        return;
      } else { // concat
        if (courant.gauche().estVide()) {
          courant = courant.droit();
        } else if (courant.gauche().estMotNonVide()) {
          this.resteMot = courant.gauche().reste().concat(courant.droit());
          this.premiereLettre = courant.gauche().element();
          return;
        } else {
          courant = courant.gauche().gauche().concat(courant.gauche().droit().concat(courant.droit()));
        }
      }
    }
  }

  public element(): Char {
    if (this.estVide()) {
      throw new Error("Unsupported Operation Exception");
    }
    if (this.premiereLettre != null) {
      return this.premiereLettre;
    }
    this.decomposer;
    return this.premiereLettre;
  }

  public gauche(): Mot {
    return this.motGauche;
  }
  public droit(): Mot {
    return this.motDroit;
  }
}