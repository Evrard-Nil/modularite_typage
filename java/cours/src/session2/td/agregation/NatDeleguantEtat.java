package session2.td.agregation;

public abstract class NatDeleguantEtat implements Nat{
	
	private EtatNaturelPur etat;
	
	public NatDeleguantEtat(EtatNaturelPur etat) {
		this.etat=etat;
	}

	public EtatNaturelPur etat() {
		return this.etat;
	}
	
	public int val() {
		return this.etat.val();
	}
	
	public Nat predecesseur() {
		return creerNatAvecEtat(etat.predecesseur());
	}
	
	public int chiffre(int val) {
		return this.etat.chiffre(val);
	}
	
	public int taille() {
		return this.etat.taille();
	}
	
	public Nat creerNatAvecValeur(int val) {
		return creerNatAvecEtat(this.etat.creerNatAvecValeur(val));
	}
	
	public Nat creerZero() {
		return creerNatAvecEtat(this.etat.creerZero());
	}
	
	public Nat creerSuccesseur(Nat pred) {
		return creerNatAvecEtat(this.etat.creerSuccesseur(pred.etat()));
	}
	
	public Nat creerNatAvecRepresentation(String repDecimale) {
		return creerNatAvecEtat(this.etat.creerNatAvecRepresentation(repDecimale));
	}
	
	public boolean estNul() {
		if(this.equals(this.zero())) return true;
		return false;
	}
	
}
