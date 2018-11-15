import {Nat} from "../../session1/td/Nat/Nat";

export abstract class EtatZero implements NatInductif {
    getVal() : number {
        return 0;
    }

    estNul() : boolean{
        return true;
    }

    predecesseur() : Nat{
        throw new Error("Pas de prédécesseur.");
    }

    chiffre(i : number) : number {
        return 0;
    }

    taille() : number {
        return 1;
    }
}
