import {EtatNaturelPur} from "./EtatNaturelIPur";
import {ZeroInductif} from "./ZeroInductif";
import {SuccInductif} from "./SuccInductif";

export abstract class NaturelInductif extends EtatNaturelPur {

    creerZero() : EtatNaturelPur {
    return new ZeroInductif();
}

creerSuccesseur(pred : EtatNaturelPur) : EtatNaturelPur {
    return new SuccInductif(pred);
}

creerNatAvecValeur(val : number) : EtatNaturelPur{
    if (val == 0)
        return this.creerZero();
    return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
}


}
