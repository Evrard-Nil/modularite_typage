package session2.td.heritageMultiple;

import session1.td.Nat;
import session2.td.heritageAscendant.NatInductif;

public abstract class EtatSucc implements NatInductif{

	private Nat predecesseur;
	
	public EtatSucc(Nat rep) {
		this.predecesseur = rep;
	}
	
	@Override
	public int val() {
		return 1 + this.predecesseur().val();
	}

	@Override
	public boolean estNul() {
		return false;
	}

	@Override
	public Nat predecesseur() {
		return this.predecesseur;
	}

	// Précondition : i >=0
	@Override
	public int chiffre(int i) {
		if(i < this.taille()){
			return Character.getNumericValue(Integer.toString(this.val()).charAt(this.taille() - 1 - i));
		}
		return 0;
	}

	@Override
	public int taille() {
		return Integer.toString(this.val()).length();
	}
}
