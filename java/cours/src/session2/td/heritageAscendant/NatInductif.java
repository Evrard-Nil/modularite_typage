package session2.td.heritageAscendant;

import session1.td.Nat;

public interface NatInductif extends Nat {

	/*
	 * Implémentation par défaut du constructeur (couche basse) creerNatAvecValeur
	 * 
	 * @param  n Valeur avec laquelle le Nat est créer
	 * @return   Nat ayant pour valeur n
	 */
	@Override
	default Nat creerNatAvecValeur(int n) {
		if(n == 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(n -1));
	}

	/*
	 * Implémentation par défaut du constructeur (couche basse) creerNatAvecRepresentation
	 * 
	 * @param s Représentation décimale du nombre à implémenter
	 * @return  Nat ayant pour valeur s
	 */
	@Override
	default Nat creerNatAvecRepresentation(String s) {
		return this.creerNatAvecValeur(Integer.parseInt(s));
	}
	
}
