import {Nat} from "../../session1/td/Nat/Nat";

export abstract class AlgebreNatRecursifZero extends Nat{

    zero() : Nat{
        return this.creerNatZero();
    }

    somme(x :Nat) : Nat {
        return x;
    }

    un() : Nat{
        return this.creerNatSucc(this.creerNatZero());
    }

    produit(x :Nat) : Nat{
        return this.creerNatZero();
    }

    modulo(x :Nat) : Nat{
        return this.creerNatZero();
    }

    div(x : Nat) : Nat{
        return this.creerNatZero();
    }

    representer() : string{
        return "0";
    }

    estEgal(obj : Object) : boolean {
        if (!(obj instanceof Nat))
            return false;
        let x = <Nat> obj;
        return x.estNul();
    }
}
