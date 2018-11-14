import {NaturelInductif} from "./NaturelInductif";
import {EtatNaturelPur} from "./EtatNaturelIPur";

export class SuccInductif extends NaturelInductif {
    private pred : EtatNaturelPur;


    constructor(pred : EtatNaturelPur) {
        super();
        this.pred = pred;
    }

    val() : number {
        return 1 + this.predecesseur().val();
    }

    estNul() : boolean {
        return false;
    }

    chiffre(i : number) : number {
        if(i < this.taille()){
            return parseInt(('' + this.val()).charAt(this.taille() - 1 - i));
        }
        return 0;
    }

    taille() : number{
        return ('' + this.val()).length;
    }

    predecesseur() : EtatNaturelPur {
        return this.pred;
    }

    equals(obj : Object) : boolean {
        if(!(obj instanceof EtatNaturelPur))
            return false;
        let x = <EtatNaturelPur> obj;
        if(x.estNul())
            return false;
        return this.predecesseur().val() == x.predecesseur().val();
    }


}
