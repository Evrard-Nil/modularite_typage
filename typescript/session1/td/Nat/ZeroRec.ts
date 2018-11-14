import { Zero } from "./Zero";
import { Nat } from "./Nat";

export class ZeroRec extends Zero {
    somme(x: Nat): Nat {
        return x ;
    }

    produit(x: Nat): Nat {
        return this.creerNatZero() ;
    }

    modulo(nat: Nat): Nat {
        return this.creerNatZero() ;
    }

    div(nat: Nat): Nat {
        if(nat.getVal()==0) {
            throw new TypeError("Argument 0 not allowed");
        }
        return this.creerNatZero() ;
    }
}