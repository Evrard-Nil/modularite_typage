package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursifSuccesseur extends Nat{
	
	@Override
	public default Nat somme(Nat x) {
		return this.creerSuccesseur(this.predecesseur().somme(x));
	}

	@Override
	public default Nat produit(Nat x) {
		return x.somme(this.predecesseur().produit(x));
	}
	
	@Override
	public default Nat modulo(Nat x) {
		Nat r = this.predecesseur().modulo(x);
		return this.creerSuccesseur(r).equals(x) ? this.creerZero() : this.creerSuccesseur(r);
	}

	@Override
	public default Nat div(Nat x) {
		Nat r = this.predecesseur().modulo(x);
		Nat q = this.predecesseur().div(x);
		return this.creerSuccesseur(r).equals(x) ? this.creerSuccesseur(q) : q;
	}
	
	public default String representer() {
		return "S^" + this.val() + "(0)";
	}
	
	public default boolean estEgal(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		if(x.estNul())
			return false;
		return this.predecesseur().equals(x.predecesseur());
	}
	
	@Override
	public default Nat zero() {
		return this.creerNatAvecValeur(0);
	}
	
	@Override
	public default Nat un() {
		return this.creerNatAvecValeur(1);
	}
}
