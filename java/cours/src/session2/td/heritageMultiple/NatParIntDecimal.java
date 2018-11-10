package session2.td.heritageMultiple;

import session1.td.Nat;

public class NatParIntDecimal extends IntPositif implements AlgebreNatDecimal {

	public NatParIntDecimal(int rep) {
		super(rep);
	}
	
	@Override
	public Nat creerNatAvecValeur(int val) {
		return new NatParIntDecimal(val);
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
