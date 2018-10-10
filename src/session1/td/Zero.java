package session1.td;

public class Zero implements Nat{
	
	static final FabriqueNat<Nat> FAB = new Zero();
	
	public Zero() {
		
	}
	/*
	 * Attributs
	 */
	public int val() {
		return 0;
	}
	

	/*
	 * Attributs
	 */
	@Override
	public Nat creerNatAvecValeur(int v) {
		return new NatParInt(v);
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat creerZero() {
		return this.creerNatAvecValeur(0);
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.un();
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat creerNatAvecRepresentation(String str) {
		return this.creerNatAvecValeur(Integer.parseInt(str));
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat somme(Nat x) {
		return this.creerNatAvecValeur(x.val());
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat zero() {
		return this.creerNatAvecValeur(0);
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat produit(Nat x) {
		return this.creerNatAvecValeur(0);
	}

	/*
	 * Attributs
	 */
	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerNatAvecValeur(0);
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur(0);
	}

	@Override
	public boolean estNul() {
		return true;
	}

	@Override
	public Nat predecesseur() {
		if(this.estNul()) 
			throw new UnsupportedOperationException("This integer is null");
		return this.creerNatAvecValeur(this.val()-1);
	}

	@Override
	public int chiffre(int i) {
		return 0;
	}

	@Override
	public int taille() {
		return 1;
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
