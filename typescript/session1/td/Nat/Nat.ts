import {FabriqueNaturels} from "./FabriqueNaturels";
import {NatDecimal} from "./NatDecimal";
import {SemiAnneauUnitaireEuclidien} from "../hierarchie/SemiAnneauUnitaireEuclidien";

export abstract class Nat implements SemiAnneauUnitaireEuclidien<Nat>, FabriqueNaturels<Nat>{
    estNul(): boolean {
        return this.getVal() == 0;
    }

    predecesseur(): Nat {
        return this.creerNatValue(this.getVal() - 1);
    }

    chiffre(index: number): number {
        try {
            return parseInt((this.getVal() + '').charAt(this.taille()-1 - index));
        } catch {
            return 0
        }
    }

    taille(): number {
        return ('' + this.getVal()).length
    }

    somme(num: Nat): Nat {
        return this.creerNatValue(this.getVal() + num.getVal());
    }

    equals(nat: /*Object*/ Nat):boolean{
        /*if(!(nat instanceof Nat)){
            return false;
        }
        return (<Nat> nat).getVal() == this.getVal();
        */
        return nat.getVal() == this.getVal();
    }

    zero(): Nat {
        return this.creerNatValue(0);
    }

    produit(num: Nat): Nat {
        return this.creerNatValue(num.getVal() * this.getVal());
    }

    un(): Nat {
        return this.creerNatValue(1);
    }

    modulo(num: Nat): Nat {
        return this.creerNatValue(this.getVal() % num.getVal());
    }

    div(num: Nat): Nat {
        if (num.estNul()){
            throw new Error('division by 0 is forbidden');
        }
        return this.creerNatValue(( this.getVal() - (this.getVal() % num.getVal()) ) / num.getVal());
    }

    abstract creerNatValue(value: number): Nat;

    abstract creerNatString(value: string): Nat;

    abstract creerNatSucc(pred: Nat): Nat;

    abstract creerNatZero(): Nat;

    abstract getVal(): number;
}