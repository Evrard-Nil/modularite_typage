package session2.td.heritageMultiple;

import session1.td.Nat;

public class SuccRecursif extends EtatSucc implements AlgebreNatRecursifSuccesseur{

	public SuccRecursif(Nat rep) {
		super(rep);
	}
	
	@Override
	public Nat creerZero() {
		return new ZeroRecursif();
	}
	
	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return new SuccRecursif(predecesseur);
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
