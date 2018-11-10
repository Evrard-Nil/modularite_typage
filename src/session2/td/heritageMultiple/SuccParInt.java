package session2.td.heritageMultiple;

import session1.td.Nat;

public class SuccParInt extends EtatSucc implements AlgebreNatParInt {

	public SuccParInt(Nat rep) {
		super(rep);
	}
	
	@Override
	public Nat creerZero() {
		return new ZeroParInt();
	}
	
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccParInt(predecesseur);
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
