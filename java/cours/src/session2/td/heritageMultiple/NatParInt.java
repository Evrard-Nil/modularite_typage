package session2.td.heritageMultiple;

import session1.td.Nat;

public class NatParInt extends IntPositif implements AlgebreNatParInt{

	public NatParInt(int rep) {
		super(rep);
	}
	
	@Override
	public Nat creerNatAvecValeur(int val) {
		return new NatParInt(val);
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
