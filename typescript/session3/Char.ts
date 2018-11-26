export class Char extends String {

  private letter: string;

  constructor(s: string) {
    super();
    if (s.length <= 1) {
      this.letter = s;
    }
    else throw new Error('Un charatère ne peut être de longeur supérieur à 1');
  }

  public toString() {
    return this.letter;
  }

  public done: boolean;
  public value: Char;

}