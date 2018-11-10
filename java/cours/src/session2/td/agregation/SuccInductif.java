package session2.td.agregation;

public class SuccInductif implements NaturelInductif {
	
	

	private EtatNaturelPur predecesseur;


	public SuccInductif(EtatNaturelPur pred) {
		this.predecesseur = pred;
	}

	@Override
	public int val() {
		return 1 + this.predecesseur().val();
	}

	@Override
	public boolean estNul() {
		return false;
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


	@Override
	public EtatNaturelPur predecesseur() {
		return this.predecesseur;
	}

	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof EtatNaturelPur))
			return false;
		EtatNaturelPur x = (EtatNaturelPur)obj;
		if(x.estNul())
			return false;
		return this.predecesseur().equals(x.predecesseur());
	}


}
