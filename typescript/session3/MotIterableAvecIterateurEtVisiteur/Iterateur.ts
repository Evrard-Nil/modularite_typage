import { Char } from "../Char";
import { Mot } from "./Mot";

export class Iterateur implements Iterator<Char> {

  private resteMot: Mot;
  private premiereLettre: Char;

  public constructor(ens: Mot) {
    this.decomposer(ens);
  }
  private decomposer(ens: Mot) {
    while (true) {
      if (ens.vide()) {
        break;
      }
      if (ens.estMotNonVide()) {
        this.resteMot = ens.reste();
        this.premiereLettre = ens.element();
        break;
      }
      if (ens.casUnion()) {
        if (ens.gauche().estVide()) {
          ens = ens.droit();
          continue;
        } else if (ens.gauche().estMotNonVide()) {
          this.resteMot = ens.gauche().reste().concat(ens.droit());
          this.premiereLettre = ens.gauche().element();
          break;
        } else {
          ens = ens.gauche().gauche().concat(ens.gauche().droit().concat(ens.droit()));
          continue;
        }
      }
    }
  }

  public aSuivant() {
    return this.resteMot != undefined;
  }

  public suivant(): Char {
    if (this.resteMot == null)
      throw new Error();
    let r: Char = this.premiereLettre;
    this.decomposer(this.resteMot);
    return r;
  }
  public reste(): Mot {
    if (this.resteMot == null)
      throw new Error();
    return this.resteMot;
  }
  public hasNext(): boolean {
    return this.aSuivant();
  }

  public next(): IteratorResult<Char> {
    return this.suivant();
  }
}