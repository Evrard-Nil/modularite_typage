import {SemiAnneauUnitaireEuclidien} from "../../structuresAlgebriques/hierarchie";
import {FabriqueNaturels} from "../../session1/td/Nat/FabriqueNaturels";
import {EtatNaturel} from "./EtatNaturel";
import {EtatNaturelPur} from "./EtatNaturelIPur";

export interface Nat extends SemiAnneauUnitaireEuclidien<Nat>, FabriqueNaturels<Nat>, EtatNaturel<Nat>{
    creerNatAvecEtat(etat : EtatNaturelPur) : Nat;
    getEtat() : EtatNaturelPur;
}
