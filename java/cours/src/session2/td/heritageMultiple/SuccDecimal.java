package session2.td.heritageMultiple;

import session1.td.Nat;

public class SuccDecimal extends EtatSucc implements AlgebreNatDecimal {

	public SuccDecimal(Nat rep) {
		super(rep);
	}
	
	@Override
	public Nat creerZero() {
		return new ZeroDecimal();
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
		if (!(obj instanceof Nat))
			return false;
		Nat x = (Nat) obj;
		return this.val() == x.val();
	}
}
