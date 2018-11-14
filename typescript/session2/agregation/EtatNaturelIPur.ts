import {EtatNaturel} from "./EtatNaturel";
import {FabriqueNaturels} from "../../session1/td/Nat/FabriqueNaturels";

export abstract class EtatNaturelPur implements EtatNaturel<EtatNaturelPur>, FabriqueNaturels<EtatNaturelPur>{
    abstract val(): number;
    abstract estNul(): boolean;
    abstract predecesseur(): EtatNaturelPur;
    abstract chiffre(val: number): number;
    abstract taille(): number;

    creerNatValue(value: number): EtatNaturelPur {
        return this.creerNatString("" + value);
    }

    creerNatString(value: string): EtatNaturelPur {
        return this.creerNatValue(parseInt(value));
    }

    creerNatSucc(pred: EtatNaturelPur): EtatNaturelPur {
        return this.creerNatValue(pred.val()+1);
    }

    creerNatZero(): EtatNaturelPur {
        return this.creerNatValue(0);
    }
}
