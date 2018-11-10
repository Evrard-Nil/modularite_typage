package session2.td.agregation;

import session1.td.FabriqueNaturels;

import hierarchie.SemiAnneauUnitaireEuclidien;

public interface Nat extends SemiAnneauUnitaireEuclidien<Nat>, FabriqueNaturels<Nat>, EtatNaturel<Nat>{
	
	public Nat creerNatAvecEtat(EtatNaturelPur etat);
	EtatNaturelPur etat();
}
