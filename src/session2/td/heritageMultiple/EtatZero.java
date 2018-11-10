package session2.td.heritageMultiple;

import session1.td.Nat;
import session2.td.heritageAscendant.NatInductif;

public abstract class EtatZero implements NatInductif {

	public EtatZero() {
		
	}
	
	@Override
	public int val() {
		return 0;
	}

	@Override
	public boolean estNul() {
		return true;
	}

	@Override
	public Nat predecesseur() {
		throw new UnsupportedOperationException("Pas de prédécesseur.");
	}

	@Override
	public int chiffre(int i) {
		return 0;
	}

	@Override
	public int taille() {
		return 1;
	}
}
