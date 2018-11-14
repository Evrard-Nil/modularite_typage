import {Nat} from "./Nat";
import {NatSucc} from "./NatSucc";
import {FabriqueNaturels} from "./FabriqueNaturels";

export class Zero extends Nat {
    public static fab = new Zero();

    creerNatValue(value: number): Zero | NatSucc {
        return value==0 ? new Zero() : new NatSucc(this.creerNatValue(value -1));
    }

    creerNatString(value: string): Nat {
        return this.creerNatValue(parseInt(value));
    }

    creerNatSucc(pred: Nat): Nat {
        return this.creerNatValue(pred.getVal() + 1);
    }

    creerNatZero(): Nat {
        return new Zero();
    }

    getVal(): number {
        return 0;
    }
}