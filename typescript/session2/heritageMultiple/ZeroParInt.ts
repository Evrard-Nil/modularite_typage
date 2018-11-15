import {EtatZero} from "./EtatZero";
import {AlgebreNatParInt} from "./AlgebreNatParInt";
import {Nat} from "../../session1/td/Nat/Nat";
import {SuccParInt} from "./SuccParInt";

export class ZeroParInt extends EtatZero, AlgebreNatParInt{
    creerNatZero() : Nat {
        return this;
    }

    creerNatSucc(predecesseur:Nat) :Nat{
    return new SuccParInt(predecesseur);
}

toString() : string{
    return '' + this.getVal();
}
equals(obj :Object) : boolean{
    if(!(obj instanceof Nat))
        return false;
    let x = <Nat>obj;
    return this.getVal() == x.getVal();
}
}
