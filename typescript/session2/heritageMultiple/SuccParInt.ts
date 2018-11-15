import {EtatSucc} from "./EtatSucc";
import {AlgebreNatParInt} from "./AlgebreNatParInt";
import {Nat} from "../../session1/td/Nat/Nat";
import {ZeroParInt} from "./ZeroParInt";

export class SuccParInt extends EtatSucc, AlgebreNatParInt {

    constructor(rep : Nat) {
        super(rep);
    }

    creerNatZero() : Nat {
        return new ZeroParInt();
    }

    creerNatSucc(predecesseur:Nat) {
        return new SuccParInt(predecesseur);
    }

    toString() : string {
        return '' + this.val();
    }

    equals(obj : Object) : boolean {
        if (!(obj instanceof Nat))
            return false;
        let x = <Nat> obj;
        return this.val() == x.getVal();
    }
}
