import {EtatZero} from "./EtatZero";
import {AlgebreNatRecursifZero} from "./AlgebreNatRecursifZero";
import {Nat} from "../../session1/td/Nat/Nat";
import {SuccRecursif} from "./SuccRecursif";

export class ZeroRecursif extends EtatZero, AlgebreNatRecursifZero{

    creerNatZero() : Nat{
        return this;
    }

    creerNatSucc(predecesseur : Nat) {
        return new SuccRecursif(predecesseur);
    }


    toString() : string{
        return'' + this.getVal();
    }

    equals(obj : Object) : boolean{
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        return this.getVal() == x.getVal();
    }
}
