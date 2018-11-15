import {EtatSucc} from "./EtatSucc";
import {AlgebreNatRecursifSuccesseur} from "./AlgebreNatRecursifSuccesseur";
import {Nat} from "../../session1/td/Nat/Nat";
import {ZeroRecursif} from "./ZeroRecursif";

export class SuccRecursif extends EtatSucc, AlgebreNatRecursifSuccesseur{

    constructor(rep : Nat) {
        super(rep);
    }

    creerZero() : Nat{
        return new ZeroRecursif();
    }

    creerSuccesseur(predecesseur : Nat) : Nat {
        return new SuccRecursif(predecesseur);
    }

    toString() : string{
        return '' + this.val();
    }

    equals(obj:Object) : boolean{
        if (!(obj instanceof Nat))
            return false;
        let x = <Nat> obj;
        return this.val() == x.getVal();
    }
}
