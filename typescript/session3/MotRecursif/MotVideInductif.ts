import { Mot } from "./mot";

export class MotVideInductif extends Mot {

  public static VIDE: MotVideInductif;

  private MotVideInductif() { }

  public static getInstance(): MotVideInductif {
    if (this.VIDE == null) {
      this.VIDE = new MotVideInductif;
    }
    return this.VIDE;
  }

  public getValue(): String {
    return '';
  }

  public taille(): number {
    return 0;
  }

  public estVide(): boolean {
    return true;
  }

}