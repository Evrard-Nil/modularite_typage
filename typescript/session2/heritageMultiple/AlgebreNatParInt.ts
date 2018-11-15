import {Nat} from "../../session1/td/Nat/Nat";

export abstract class AlgebreNatParInt extends Nat {

    zero() : Nat {
        return this.creerNatValue(0);
    }

    somme(x : Nat) : Nat {
        return this.creerNatValue(this.getVal() + x.getVal());
    }

    un() : Nat {
        return this.creerNatValue(1);
    }

    produit(x : Nat) : Nat{
        return this.creerNatValue(this.getVal() * x.getVal());
    }


    modulo(x : Nat) : Nat {
        return this.creerNatValue(this.getVal()%x.getVal());
    }

    div(x : Nat) : Nat {
        return this.creerNatValue(this.getVal()/x.getVal());
    }

    representer() : string {
        return '' + this.getVal();
    }

    estEgal(obj : Object) : boolean{
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat> obj;
        return this.getVal() == x.getVal();
    }
}
