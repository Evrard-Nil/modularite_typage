import { Mot } from "./Mot";
import { Char } from "../Char";
import { Iterateur } from "./Iterateur";

export class MotConcat extends Mot {

  private motGauche: Mot;
  private motDroit: Mot;
  private tailleMot: number;

  public constructor(g: Mot, d: Mot) {
    super();
    this.motGauche = g;
    this.motDroit = d;
    this.tailleMot = g.taille() + d.taille();
  }

  public taille(): number {
    return this.tailleMot;
  }

  public casUnion(): boolean {
    return true;
  }

  public element(): Char {
    let i: Iterateur = this.iterateur();
    return i.suivant();
  }
  public reste(): Mot {
    let i: Iterateur = this.iterateur();
    return i.reste();
  }

  public gauche(): Mot {
    return this.motGauche;
  }
  public droit(): Mot {
    return this.motDroit;
  }
}