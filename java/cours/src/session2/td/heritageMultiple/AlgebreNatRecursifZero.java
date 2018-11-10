package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursifZero extends Nat{

	@Override
	public default Nat zero() {
		return this.creerZero();
	}

	@Override
	public default Nat somme(Nat x) {
		return x;
	}

	@Override
	public default Nat un() {
		return this.creerSuccesseur(this.creerZero());
	}

	@Override
	public default Nat produit(Nat x) {
		return this.creerZero();
	}

	@Override
	public default Nat modulo(Nat x) {
		return this.creerZero();
	}

	@Override
	public default Nat div(Nat x) {
		return this.creerZero();
	}

	public default String representer() {
		return "0";
	}

	public default boolean estEgal(Object obj) {
		if (!(obj instanceof Nat))
			return false;
		Nat x = (Nat) obj;
		return x.estNul();
	}
}
