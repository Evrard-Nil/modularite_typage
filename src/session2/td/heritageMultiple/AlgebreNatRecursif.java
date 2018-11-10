package session2.td.heritageMultiple;

import session1.td.Nat;

public interface AlgebreNatRecursif extends AlgebreNatRecursifSuccesseur, AlgebreNatRecursifZero {

	@Override
	default Nat produit(Nat x) {
		if(this.estNul() || x.estNul()) {
			return AlgebreNatRecursifZero.super.produit(x);
		} else {
			return AlgebreNatRecursifSuccesseur.super.produit(x);
		}
	}

	@Override
	default Nat modulo(Nat x) {
		if(this.estNul() || x.estNul()) {
			return AlgebreNatRecursifZero.super.modulo(x);
		} else {
			return AlgebreNatRecursifSuccesseur.super.modulo(x);
		}
	}

	@Override
	default boolean estEgal(Object obj) {
		if(this.estNul()) {
			return AlgebreNatRecursifZero.super.estEgal(obj);
		} else {
			return AlgebreNatRecursifSuccesseur.super.estEgal(obj);
		}
	}

	@Override
	default Nat zero() {
		return this.creerNatAvecValeur(0);
	}

	@Override
	default String representer() {
		if(this.estNul()) {
			return AlgebreNatRecursifZero.super.representer();
		} else {
			return AlgebreNatRecursifSuccesseur.super.representer();
		}
	}

	@Override
	default Nat div(Nat x) {
		if(this.estNul() || x.estNul()) {
			return AlgebreNatRecursifZero.super.div(x);
		} else {
			return AlgebreNatRecursifSuccesseur.super.div(x);
		}
	}

	@Override
	default Nat somme(Nat x) {
		if(this.estNul()) {
			return AlgebreNatRecursifZero.super.produit(x);
		} else {
			return AlgebreNatRecursifSuccesseur.super.produit(x);
		}
	}

	@Override
	default Nat un() {
		return this.creerNatAvecValeur(1);
	}

}
