import {Nat} from "../../session1/td/Nat/Nat";

export abstract class EtatSucc implements NatInductif{

    private pred : Nat;

    constructor(rep : Nat) {
        this.pred = rep;
    }

    val() : number {
        return 1 + this.predecesseur().getVal();
    }

    estNul() : boolean{
        return false;
    }

    predecesseur() : Nat{
        return this.pred;
    }

    chiffre(i : number) : number {
        if(i < this.taille()){
            return parseInt(('' + this.val()).charAt(this.taille() - 1 - i));
        }
        return 0;
    }

    taille() : number {
        return ('' + this.val()).length;
    }
}
