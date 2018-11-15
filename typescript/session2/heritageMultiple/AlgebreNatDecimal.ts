import {Nat} from "../../session1/td/Nat/Nat";

export abstract class AlgebreNatDecimal extends Nat{

    somme(x : Nat) : Nat {
        return this.creerNatValue(this.getVal() + x.getVal());
    }

    zero() : Nat {
        return this.creerNatZero();
    }

    produit(x : Nat) : Nat {
        if(x.equals(this.creerNatString("10"))){
            return this.creerNatString(this.toString() + "0");
        }
        let res = this.zero();
        let index = this.zero();
        while(!index.equals(x)){
            res = res.somme(this);
            index = this.creerNatSucc(index);
        }
        return res;
    }

    un() : Nat {
        return this.creerNatString("1");
    }

    modulo(x : Nat) : Nat{
        if(x.equals(this.creerNatString("10"))){
            return this.creerNatValue(this.chiffre(0));
        }
        let courant = this.zero();
        let r = this.zero();
        while(!courant.equals(this)){
            r = this.creerNatSucc(r);
            if(r.equals(x)){
                r = this.zero();
            }
            courant = this.creerNatSucc(courant);
        }
        return r;
    }

    div(x : Nat) : Nat{
        if(x.equals(this.creerNatString("10"))){
            if(this.taille() == 1)
                return this.zero();
            return this.creerNatString(this.toString().substring(0, this.taille() - 1));
        }
        let courant = this.zero();
        let q = this.zero();
        let r = this.zero();
        while(!courant.equals(this)){
            r = this.creerNatSucc(r);
            if(r.equals(x)){
                r = this.zero();
                q = this.creerNatSucc(q);
            }
            courant = this.creerNatSucc(courant);
        }
        return q;
    }

    estEgal(x : Object) : boolean {
        if(!(x instanceof Nat)) return false;
        let n = <Nat>x;
        return this.toString() == n.toString();
    }

    representer() : string {
        return '' + this.getVal();
    }
}
