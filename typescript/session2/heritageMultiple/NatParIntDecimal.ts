import {IntPositif} from "./IntPositif";
import {AlgebreNatDecimal} from "./AlgebreNatDecimal";
import {Nat} from "../../session1/td/Nat/Nat";

export class NatParIntDecimal extends IntPositif, AlgebreNatDecimal {

    constructor(rep : number) {
        super(rep);
    }

    creerNatValue( val : number) : Nat{
        return new NatParIntDecimal(val);
    }

    toString() : string{
        return '' + this.getVal();
    }

    equals(obj : Object) : boolean{
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        return this.getVal() == x.getVal();
    }
}
