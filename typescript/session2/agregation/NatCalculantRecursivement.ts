import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {EtatNaturelPur} from "./EtatNaturelIPur";
import {Nat} from "./Nat";
import {NatCaculantAvecDesInts} from "./NatCalculantAvecDesInts";
import {NatCalculantAvecDesNombresDecimaux} from "./NatCalculantAvecDesNombresDecimaux";

export class NatCalculantRecursivement extends NatDeleguantEtat {

    constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat {
        return new NatCalculantRecursivement(etat);
    }

    somme(x : Nat) : Nat {
        return this.creerNatSucc(this.predecesseur().somme(x));
    }

    zero() : Nat {
        return this.creerNatZero();
    }

    produit(x : Nat) : Nat {
        return x.somme(this.predecesseur().produit(x));
    }

    un() : Nat {
        return this.creerNatSucc(this.zero());
    }

    modulo(x : Nat) : Nat {
        let r = this.predecesseur().modulo(x);
        return this.creerNatSucc(r).val() == x.val() ? this.creerNatZero() : this.creerNatSucc(r);
    }

    div(x : Nat) : Nat {
        let r = this.predecesseur().modulo(x);
        let q = this.predecesseur().div(x);
        return this.creerNatSucc(r).val() == x.val() ? this.creerNatSucc(q) : q;
    }

    toString() : string {
        return "S^" + this.val() + "(0)";
    }

    equals(obj : Object) : boolean {
        if(!(NatCalculantRecursivement.instanceOfNat(obj)))
            return false;
        let x = <Nat>obj;
        if(x.estNul())
            return false;
        return this.predecesseur().val() == x.predecesseur().val();
    }

    public static instanceOfNat(nb : Object) : boolean {
        return nb instanceof NatCalculantRecursivement || nb instanceof NatCaculantAvecDesInts || nb instanceof NatCalculantAvecDesNombresDecimaux
    }
}
