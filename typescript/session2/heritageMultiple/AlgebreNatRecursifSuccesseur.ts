import {Nat} from "../../session1/td/Nat/Nat";

export abstract class AlgebreNatRecursifSuccesseur extends Nat{

    somme(x : Nat) : Nat {
        return this.creerNatSucc(this.predecesseur().somme(x));
    }

    produit(x : Nat) : Nat{
        return x.somme(this.predecesseur().produit(x));
    }

    modulo(x : Nat) : Nat {
        let r = this.predecesseur().modulo(x);
        return this.creerNatSucc(r).equals(x) ? this.creerNatZero() : this.creerNatSucc(r);
    }

    div(x : Nat) : Nat{
        let r = this.predecesseur().modulo(x);
        let q = this.predecesseur().div(x);
        return this.creerNatSucc(r).equals(x) ? this.creerNatSucc(q) : q;
    }

    representer() : string{
        return "S^" + this.getVal() + "(0)";
    }

    estEgal(obj : Object) : boolean{
        if(!(obj instanceof Nat))
            return false;
        let x = <Nat>obj;
        if(x.estNul())
            return false;
        return this.predecesseur().equals(x.predecesseur());
    }

    zero() : Nat{
        return this.creerNatValue(0);
    }

    un() : Nat{
        return this.creerNatValue(1);
    }
}
