import {IntPositif} from "./IntPositif";
import {AlgebreNatParInt} from "./AlgebreNatParInt";
import {Nat} from "../../session1/td/Nat/Nat";

export class NatParInt extends IntPositif, AlgebreNatParInt{

    constructor(rep : number) {
        super(rep);
    }

    creerNatAvecValeur(val : number) : Nat{
        return new NatParInt(val);
    }

    toString() : string{
        return '' + this.getVal();
    }

    equals(obj : Object) : boolean {
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        return this.getVal() == x.getVal();
    }
}
