package session1.td;

import hierarchie.SemiAnneauUnitaireEuclidien;

public interface Nat extends FabriqueNat<Nat>, SemiAnneauUnitaireEuclidien<Nat> {

	/*
	 * 
	 */
	boolean estNul();

	/*
	 * Gives decomposition 
	 */
	Nat predecesseur();

	/*
	 * Units in first position, decade in second, etc...
	 */
	int chiffre(int i);

	/*
	 * Return size of Nat
	 */
	int taille();
	
	/*
	 * Int representation
	 */
	int val();
}
