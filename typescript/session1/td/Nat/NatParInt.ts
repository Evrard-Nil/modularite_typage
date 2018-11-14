import {Nat} from "./Nat";
import {FabriqueNaturels} from "./FabriqueNaturels";

export class NatParInt extends Nat {
    private val: number;
    public static fab: FabriqueNaturels<NatParInt> = new NatParInt(0);

    constructor(val: number){
        super();

        if (val < 0 || val%1 !== 0) {
            throw new TypeError('Val argument must be natural number (a positif integer)');
        }
        this.val = val;
    }

    creerNatValue(value: number): NatParInt {
        return new NatParInt(value);
    }

    creerNatString(value: string): NatParInt {
        return new NatParInt(parseInt(value));
    }

    creerNatSucc(pred: Nat): NatParInt {
        return new NatParInt(pred.getVal() + 1);
    }

    creerNatZero(): NatParInt {
        return new NatParInt(0);
    }

    getVal(): number {
        return this.val;
    }
}