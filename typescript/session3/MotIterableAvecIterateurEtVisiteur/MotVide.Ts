import { Mot } from './Mot';

export class MotVide extends Mot {

  static VIDE: MotVide;

  private constructor() {
    super();
  }

  public static getInstance(): MotVide {
    if (this.VIDE == null) {
      return new MotVide;
    }
    return this.VIDE;
  }
  taille(): number {
    return 0;
  }
  estVide(): boolean {
    return true;
  }
}