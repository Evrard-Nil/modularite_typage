import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {EtatNaturelPur} from "./EtatNaturelIPur";
import {Nat} from "./Nat";

export class NatCaculantAvecDesInts extends NatDeleguantEtat {
    constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat {
        return new NatCaculantAvecDesInts(etat);
    }

    somme(x : Nat) : Nat {
        return this.creerNatValue(x.val()+this.val());
    }

    zero() : Nat {
        return this.creerNatZero();
    }

    produit(x : Nat) : Nat {
        return this.creerNatValue(this.val() * x.val());
    }

    un() : Nat {
        return this.creerNatValue(1);
    }

    modulo(x : Nat) : Nat{
        return this.creerNatValue(this.val()%x.val());
    }

    div(x : Nat) : Nat {
        return this.creerNatValue(this.val()/x.val());
    }
}
