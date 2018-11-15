import {NombreDecimal} from "../agregation/NombreDecimal";
import {AlgebreNatRecursif} from "./AlgebreNatRecursif";
import {Nat} from "../../session1/td/Nat/Nat";
import {NatDecimal} from "./NatDecimal";

export class NatDecimalParIntRecursif extends NombreDecimal, AlgebreNatRecursif {

    constructor(rep : string) {
        super(rep);
    }

    creerNatAvecRepresentation(repDecimale : string) : Nat {
        repDecimale = NombreDecimal.nettoyer(repDecimale);
        if(repDecimale == ""){
            repDecimale = "0";
        }
        return new NatDecimal(repDecimale);
    }

    equals(x : Object) : boolean{
        if(!(x instanceof Nat)) return false;
        let n = <Nat>x;
        return this.toString() == n.toString();
    }

    toString() : string {
        return this.representer();
    }
}
