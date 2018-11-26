import { Mot } from "./mot";

export class MotVideInductif extends Mot {

  public static VIDE: MotVideInductif;

  private constructor() {
    super();
  }

  public static getInstance(): MotVideInductif {
    if (this.VIDE == null) {
      this.VIDE = new MotVideInductif;
    }
    return this.VIDE;
  }

  public getValue(): string {
    return '';
  }

  public taille(): number {
    return 0;
  }

  public estVide(): boolean {
    return true;
  }

}