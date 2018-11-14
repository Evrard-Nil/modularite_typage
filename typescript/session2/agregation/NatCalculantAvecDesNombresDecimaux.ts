import {NatDeleguantEtat} from "./NatDeleguantEtat";
import {EtatNaturelPur} from "./EtatNaturelIPur";
import {Nat} from "./Nat";
import {NatCaculantAvecDesInts} from "./NatCalculantAvecDesInts";

export class NatCalculantAvecDesNombresDecimaux  extends NatDeleguantEtat {
    constructor(etat : EtatNaturelPur) {
        super(etat);
    }

    creerNatAvecEtat(etat : EtatNaturelPur) : Nat{
        return new NatCalculantAvecDesNombresDecimaux(etat);
    }

    somme(x : Nat) : Nat {
        return this.creerNatValue(this.val() + x.val());
    }

    zero() : Nat {
        return this.creerNatZero();
    }

    produit(x : Nat) : Nat {
        if(x.val() == 10){
            return this.creerNatString(this.toString() + "0");
        }
        let res = this.zero();
        let index = this.zero();
        while(index.val() != x.val()){
            res = res.somme(this);
            index = this.creerNatSucc(index);
        }
        return res;
    }

    un() : Nat {
        return this.creerNatString("1");
    }

    modulo(x : Nat) : Nat {
        if(x.val() == 10){
            return this.creerNatValue(this.chiffre(0));
        }
        let courant = this.zero();
        let r = this.zero();
        while(courant.val() != this.val()){
            r = this.creerNatSucc(r);
            if(r.val() == x.val()){
                r = this.zero();
            }
            courant = this.creerNatSucc(courant);
        }
        return r;
    }

    div(x : Nat) : Nat {
        if(x.val() == 10){
            if(this.taille() == 1)
                return this.zero();
            return this.creerNatString(this.toString().substring(0, this.taille() - 1));
        }
        let courant = this.zero();
        let q = this.zero();
        let r = this.zero();
        while(courant.val() != this.val()) {
            r = this.creerNatSucc(r);
            if(r.val() == x.val()){
                r = this.zero();
                q = this.creerNatSucc(q);
            }
            courant = this.creerNatSucc(courant);
        }
        return q;
    }

    equals(obj : Object) : boolean {
        if(!(obj instanceof NatCalculantAvecDesNombresDecimaux || obj instanceof NatCaculantAvecDesInts)) return false;
        let n = <Nat> obj;
        return this.toString() == n.toString();
    }

    toString() : string {
        return this.getEtat().toString();
    }
}
