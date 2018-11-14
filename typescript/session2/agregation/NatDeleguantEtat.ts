import {EtatNaturelPur} from "./EtatNaturelIPur";
import {Nat} from "./Nat";

export abstract class NatDeleguantEtat implements Nat{
    abstract creerNatAvecEtat(etat: EtatNaturelPur): Nat;
    abstract somme(x: Nat): Nat;
    abstract zero(): Nat;
    abstract produit(x: Nat): Nat;
    abstract un(): Nat;
    abstract modulo(x: Nat): Nat;
    abstract div(x: Nat): Nat;

    private etat : EtatNaturelPur;

    constructor(etat : EtatNaturelPur) {
        this.etat=etat;
    }

    getEtat() : EtatNaturelPur {
        return this.etat;
    }

    val() : number {
        return this.etat.val();
    }

    predecesseur() : Nat {
        return this.creerNatAvecEtat(this.etat.predecesseur());
    }

    chiffre(val : number) : number {
        return this.etat.chiffre(val);
    }

    taille() : number {
        return this.etat.taille();
    }

    creerNatValue(val : number) : Nat{
        return this.creerNatAvecEtat(this.etat.creerNatValue(val));
    }

    creerNatZero() : Nat {
        return this.creerNatAvecEtat(this.etat.creerNatZero());
    }

    creerNatSucc(pred : Nat) : Nat {
        return this.creerNatAvecEtat(this.etat.creerNatSucc(pred.getEtat()));
    }

    creerNatString(repDecimale : string) : Nat {
        return this.creerNatAvecEtat(this.etat.creerNatString(repDecimale));
    }

    estNul() : boolean {
        return this.val() == 0;
    }
}
