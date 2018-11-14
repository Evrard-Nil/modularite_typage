import { Nat } from "./Nat" ;
import {NatSucc} from "./NatSucc";
import {Zero} from "./Zero";
import {FabriqueNaturels} from "./FabriqueNaturels";

export class NatSuccRec extends NatSucc {
    somme(nat: Nat): Nat {
        return this.creerNatValue(1 + this.somme(nat.predecesseur()).getVal());
    }

    produit(nat: Nat): Nat {
        return this.creerNatValue(this.getVal() + this.produit(nat.predecesseur()).getVal());
    }

    modulo(nat: Nat): Nat {
        return this.getVal() >= nat.getVal() ? this.creerNatValue(this.getVal() - nat.getVal()).modulo(nat)
            : this.creerNatValue(this.getVal());
    }

    div(nat: Nat): Nat {
        if (nat.getVal() == 0) {
            throw new TypeError("Argument 0 not allowed");
        }
        let res = this.getVal() >= nat.getVal() ? this.creerNatValue(this.getVal() - nat.getVal()).div(nat).getVal() + 1
                                                : 0;
        return this.creerNatValue(res);
    }
}