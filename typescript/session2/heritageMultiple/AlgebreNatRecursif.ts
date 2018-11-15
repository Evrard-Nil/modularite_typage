import {Nat} from "../../session1/td/Nat/Nat";
import {AlgebreNatRecursifSuccesseur} from "./AlgebreNatRecursifSuccesseur";
import {AlgebreNatRecursifZero} from "./AlgebreNatRecursifZero";

export abstract class AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur, AlgebreNatRecursifZero {

    produit(x : Nat) : Nat {
        if(this.estNul() || x.estNul()) {
            return AlgebreNatRecursifZero.produit(x);
        } else {
            return AlgebreNatRecursifSuccesseur.super.produit(x);
        }
    }

    modulo(x : Nat) : Nat {
        if(this.estNul() || x.estNul()) {
            return AlgebreNatRecursifZero.super.modulo(x);
        } else {
            return AlgebreNatRecursifSuccesseur.super.modulo(x);
        }
    }

    estEgal(obj : Object) : boolean{
        if(this.estNul()) {
            return AlgebreNatRecursifZero.super.estEgal(obj);
        } else {
            return AlgebreNatRecursifSuccesseur.super.estEgal(obj);
        }
    }

    zero() : Nat {
        return this.creerNatValue(0);
    }

    representer() : string {
        if(this.estNul()) {
            return AlgebreNatRecursifZero.super.representer();
        } else {
            return AlgebreNatRecursifSuccesseur.super.representer();
        }
    }

    div(x : Nat) : Nat {
        if(this.estNul() || x.estNul()) {
            return AlgebreNatRecursifZero.super.div(x);
        } else {
            return AlgebreNatRecursifSuccesseur.super.div(x);
        }
    }

    somme(x : Nat) : Nat {
        if(this.estNul()) {
            return AlgebreNatRecursifZero.super.produit(x);
        } else {
            return AlgebreNatRecursifSuccesseur.super.produit(x);
        }
    }

    un() : Nat {
        return this.creerNatAvecValeur(1);
    }

}
