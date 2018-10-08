package session1.td;

public class NatParInt implements Nat{
	
	
	  
	 
	static final FabriqueNat<Nat> FAB = new NatParInt(0);
	
	private int val;

	 
	public NatParInt(int val) {
		if(val<0) 
			throw new IllegalArgumentException("This integer is not a natural integer");
		else
			this.val =val;
	}
	
	  
	 
	public int val() {
		return this.val;
	}
	  
	 
	@Override
	public Nat creerNatAvecValeur(int v) {
		return new NatParInt(v);
	}

	
	@Override
	public Nat creerZero() {
		return this.creerNatAvecValeur(0);
	}

	 
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecValeur(predecesseur.val() + 1);
	} 
	 
	@Override
	public Nat creerNatAvecRepresentation(String str) {
		return this.creerNatAvecValeur(Integer.parseInt(str));
	}
	  
	 
	@Override
	public Nat somme(Nat x) {
		return this.creerNatAvecValeur(this.val()+x.val());
	}

	 
	@Override
	public Nat zero() {
		return this.creerNatAvecValeur(0);
	}

	 
	@Override
	public Nat produit(Nat x) {
		return this.creerNatAvecValeur(this.val()*x.val());
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
		boolean t;
		if (this.val()==0)
			t = true;
		else 
			t = false; 
		return t;
	}

	@Override
	public Nat predecesseur() {
		if(this.estNul()) 
			throw new UnsupportedOperationException("This integer is null");
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