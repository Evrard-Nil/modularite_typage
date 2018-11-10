package session2.td.heritageMultiple;

import session1.td.Nat;

public class ZeroDecimal extends EtatZero implements AlgebreNatDecimal {
	
	public ZeroDecimal() {
		
	}
	
	@Override
	public Nat creerZero() {
		return this;
	}
	
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccDecimal(predecesseur);
	}
	
	@Override
	public String toString() {
		return Integer.toString(this.val());
	}
	@Override
	public boolean equals(Object obj) {
		if(!(obj instanceof Nat))
			return false;
		Nat x = (Nat)obj;
		return this.val() == x.val();
	}
}
