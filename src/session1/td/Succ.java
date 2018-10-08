package session1.td;

public class Succ implements Nat {

	
	/*
	 * Attributs predecesseur
	 */
	static final FabriqueNat<Nat> FAB = new Succ(Zero.FAB.creerZero());
	
	private Nat predecesseur;

	/*
	 * Constructeur
	 */
	public Succ(Nat predecesseur) {
		this.predecesseur = predecesseur;	
	}
	 
	
	public int val() {
		return 1+this.predecesseur.val();
	}
	
	@Override
	public Nat creerNatAvecValeur(int val) {
		if (val == 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
	}

	@Override
	public Nat creerZero() {
		return new Zero();
	}

	public Nat creerSuccesseur(Nat predecesseur) {
		return  new Succ(predecesseur);
	}

	
	public Nat creerNatAvecRepresentation(String str) {
		return this.creerNatAvecValeur(Integer.parseInt(str));
	}

	@Override
	public Nat somme(Nat x) {
		return this.creerNatAvecValeur(this.val()+x.val());
	}

	
	public Nat zero() {
		return this.creerNatAvecValeur(0);
	}

	public Nat produit(Nat x) {
		return this.creerNatAvecValeur(this.val() * x.val());
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerNatAvecValeur(this.val() % x.val());
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur((this.val()-this.modulo(x).val())/x.val());
	}

	@Override
	public boolean estNul() {
		return false;
	}

	@Override
	public Nat predecesseur() {
		return this.creerNatAvecValeur(this.val()-1);
	}

	@Override
	public int chiffre(int i) {
		if (i == 0) 
			return this.val()%10;
		else
			return (this.creerNatAvecValeur(this.val()/10)).chiffre(i-1);
	}

	@Override
	public int taille() {
		if (this.val()<10)
			return 1;
		else 
			return 1+(this.creerNatAvecValeur(this.val()%10).taille());
	}
	@Override
	public String toString() {
		return Integer.toString(this.val());
	}
	
	
	@Override
	public boolean equals(Object x) {
		if(!(x instanceof Nat))
			return false;
		return this.val() == ((Nat)x).val();
	}
}
