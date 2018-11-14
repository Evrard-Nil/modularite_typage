import {EtatNaturelPur} from "./EtatNaturelIPur";
import {NatParInt} from "../../session1/td/Nat/NatParInt";
import {Nat} from "../../session1/td/Nat/Nat";

export class IntPositif extends EtatNaturelPur {
    private value : number;

    constructor(val : number) {
        super();
        if(val < 0) {
            throw new Error("Pas de IntPositif à patir d'un int négatif.");
        }
        this.value = val;
    }

    val(): number {
        return this.value;
    }

    estNul(): boolean {
        return this.val() == 0;
    }

    predecesseur(): EtatNaturelPur {
        if(this.estNul()) {
            throw new Error("Pas de prédécesseur.");
        }
        return this.creerNatValue(this.val() - 1);
    }

    chiffre(i: number): number {
        return (i == 0) ? this.val()%10 : (new NatParInt(this.val()/10)).chiffre(i-1);
    }

    taille(): number {
        return (this.val() < 10) ? 1 : 1 + (new NatParInt(this.val() / 10)).taille();
    }

    creerNatValue(value: number): EtatNaturelPur {
        return new IntPositif(value);
    }

    toString() : string {
        return "" + this.value;
    }

    equals(obj: Object) : boolean {
        if(!(obj instanceof Nat)) {
            return false;
        }
        let x : Nat = <Nat> obj;
        return this.val() == x.getVal();
    }
}
