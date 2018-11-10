package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatParInt extends Nat {

	@Override
	public default Nat zero() {
		return this.creerNatAvecValeur(0);
	}

	@Override
	public default Nat somme(Nat x) {
		return this.creerNatAvecValeur(this.val() + x.val());
	}

	@Override
	public default Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public default Nat produit(Nat x) {
		return this.creerNatAvecValeur(this.val() * x.val());
	}


	@Override
	public default Nat modulo(Nat x) {
		return this.creerNatAvecValeur(this.val()%x.val());
	}

	@Override
	public default Nat div(Nat x) {
		return this.creerNatAvecValeur(this.val()/x.val());
	}
	
	public default String representer() {
		return Integer.toString(this.val());
	}
	
	public default boolean estEgal(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
}
