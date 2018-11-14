import {NaturelInductif} from "./NaturelInductif";
import {EtatNaturelPur} from "./EtatNaturelIPur";

export class ZeroInductif extends NaturelInductif {
    val() : number {
        return 0;
    }

    estNul() : boolean {
        return true;
    }

    predecesseur() : EtatNaturelPur {
        throw new Error("Pas de prédécesseur.");
    }

    chiffre(i : number) : number {
        return 0;
    }

    taille() : number {
        return 0;
    }

    toString() : string {
        return "0";
    }

    equals(obj : Object) : boolean{
        if (!(obj instanceof EtatNaturelPur))
            return false;
        let x = <EtatNaturelPur> obj;
        return x.estNul();
    }
}
