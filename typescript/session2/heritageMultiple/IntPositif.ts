import {Nat} from "../../session1/td/Nat/Nat";
import {NatParInt} from "./NatParInt";

export abstract class IntPositif extends Nat {

    private val : number;

    constructor(rep : number) {
        super();
        this.val = rep;
    }

    creerNatAvecRepresentation(repDecimale : string) : Nat{
        return this.creerNatValue(parseInt(repDecimale));
    }

    creerZero() : Nat{
        return this.creerNatValue(0);
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return this.creerNatValue(predecesseur.getVal() + 1);
    }

    getVal() : number{
        return this.val;
    }

    estNul() : boolean{
        return this.getVal() == 0;
    }

    predecesseur() : Nat{
        if(this.estNul())
            throw new Error("Pas de prédécesseur.");
        return this.creerNatValue(this.getVal() - 1);
    }

    chiffre(i : number) : number {
        return (i == 0) ? this.getVal()%10 : (new NatParInt(this.getVal()/10)).chiffre(i-1);
    }

    taille() : number{
        return (this.getVal() < 10) ? 1 : 1 + (new NatParInt(this.getVal() / 10)).taille();
    }
}
