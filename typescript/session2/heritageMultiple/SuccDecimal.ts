import {EtatSucc} from "./EtatSucc";
import {AlgebreNatDecimal} from "./AlgebreNatDecimal";
import {Nat} from "../../session1/td/Nat/Nat";
import {ZeroDecimal} from "./ZeroDecimal";

export class SuccDecimal extends EtatSucc, AlgebreNatDecimal {

    constructor(rep : Nat) {
        super(rep);
    }

    creerNatZero() : Nat {
        return new ZeroDecimal();
    }

    creerNatSucc(predecesseur : Nat) : Nat{
        return new SuccDecimal(predecesseur);
    }

    toString() : string {
        return '' + this.val();
    }

    equals( obj : Object) : boolean{
        if (!(obj instanceof Nat))
            return false;
        let x = <Nat> obj;
        return this.val() == x.getVal();
    }
}
