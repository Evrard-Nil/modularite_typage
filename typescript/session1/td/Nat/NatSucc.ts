import {Nat} from "./Nat";
import {Zero} from "./Zero";
import {FabriqueNaturels} from "./FabriqueNaturels";

export class NatSucc extends Nat {
    public static fab: FabriqueNaturels<Nat> = new NatSucc(new Zero());
    private pred: Nat;

    constructor(pred: Nat) {
        super();
        this.pred = pred;
    }

    creerNatValue(value: number): Nat {
        if (value < 0 || value%1 !== 0) {
            throw new TypeError('Value argument must be natural number (a positif integer)');
        }
        return value == 0 ? new Zero() : new NatSucc(this.creerNatValue(value-1));
    }

    creerNatString(value: string): Nat {
        return this.creerNatValue(parseInt(value));
    }

    creerNatSucc(pred: Nat): Nat {
        return this.creerNatValue(pred.getVal() + 1);
    }

    creerNatZero(): Nat {
        return this.creerNatValue(0);
    }

    getVal(): number {
        return this.pred.getVal() + 1;
    }
}