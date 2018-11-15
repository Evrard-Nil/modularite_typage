import {EtatZero} from "./EtatZero";
import {AlgebreNatDecimal} from "./AlgebreNatDecimal";
import {Nat} from "../../session1/td/Nat/Nat";
import {SuccDecimal} from "./SuccDecimal";

export class ZeroDecimal extends EtatZero, AlgebreNatDecimal {

    creerNatZero() : Nat {
        return this;
    }

    creerNatSucc(predecesseur : Nat) : Nat {
        return new SuccDecimal(predecesseur);
    }

    toString() : string {
        return '' + this.getVal();
    }

    equals(obj :Object) : boolean {
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        return this.getVal() == x.getVal();
    }
}
