package session2.td.agregation;

public class ZeroInductif implements NaturelInductif {

	public ZeroInductif() {
		
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
	public EtatNaturelPur predecesseur() {
		throw new UnsupportedOperationException("Pas de prédécesseur.");
	}
	
	@Override
	public int chiffre(int i) {
		return 0;
	}
	
	@Override
	public int taille() {
		return 0;
	}
	
	@Override
	public String toString() {
		return "0";
	}
	
	@Override
	public boolean equals(Object obj) {
		if (!(obj instanceof EtatNaturelPur))
			return false;
		EtatNaturelPur x = (EtatNaturelPur) obj;
		return x.estNul();
	}
}
