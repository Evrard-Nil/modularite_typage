package session1.td;

public class SuccRec extends Succ implements Nat {
	
	public static final FabriqueNat<Nat> FAB = new SuccRec(ZeroRec.FAB.creerZero());

	public SuccRec(Nat predecesseur) {
		super(predecesseur);
		// TODO Auto-generated constructor stub
	}
	
	public Nat creerSuccesseur(Nat pred) {
		return new SuccRec(pred);
	}
	
	public Nat creerZero() {
		return ZeroRec.FAB.creerZero();
	}
	
	public Nat somme(Nat x) {
		return this.creerSuccesseur(this.predecesseur().somme(x));
	}
	
	public Nat produit(Nat x) {
		return x.somme(x.produit(this.predecesseur()));
	}
	
	public Nat modulo(Nat x) {
		Nat y = this.predecesseur().modulo(x);
		return this.creerSuccesseur(y).equals(x) ? this.creerZero() : this.creerSuccesseur(y);
	}
	
	public Nat div(Nat x) {
		Nat y = this.predecesseur().div(x);
		return this.modulo(x).equals(this.creerZero()) ? this.creerSuccesseur(y) : y;
	}
	
	public String toString() {
		return String.valueOf(this.val());
	}
	
	public boolean equals(Object o) {
		if(!(o instanceof Nat)) {
			return false;
		}
		Nat x = (Nat)o;
		if(x.val() == this.val())
			return true;
		else
			return false;
	}

}