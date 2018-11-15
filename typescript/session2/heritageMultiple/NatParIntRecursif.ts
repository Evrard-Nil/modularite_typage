import {IntPositif} from "./IntPositif";
import {AlgebreNatRecursif} from "./AlgebreNatRecursif";
import {Nat} from "../../session1/td/Nat/Nat";

export class NatParIntRecursif extends IntPositif, AlgebreNatRecursif {

    constructor(rep : number) {
        super(rep);
    }

    creerNatAvecValeur(val : number) : Nat{
        return new NatParIntRecursif(val);
    }

    toString() : string {
        return '' + this.getVal();
    }
    
    equals(obj : Object) : boolean {
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        return this.getVal() == x.getVal();
    }
}
