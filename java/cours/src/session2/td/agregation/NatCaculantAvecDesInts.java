package session2.td.agregation;

public class NatCaculantAvecDesInts extends NatDeleguantEtat {
	
	public NatCaculantAvecDesInts(EtatNaturelPur etat) {
		super(etat);
	}

	@Override
	public Nat creerNatAvecEtat(EtatNaturelPur etat) {
		return new NatCaculantAvecDesInts(etat);
	}

	@Override
	public Nat somme(Nat x) {
		return creerNatAvecValeur(x.val()+this.val());
	}

	@Override
	public Nat zero() {
		return creerZero();
	}

	@Override
	public Nat produit(Nat x) {
		return this.creerNatAvecValeur(this.val() * x.val());
	}

	@Override
	public Nat un() {
		return this.creerNatAvecValeur(1);
	}

	@Override
	public Nat modulo(Nat x) {
		return this.creerNatAvecValeur(this.val()%x.val());
	}

	@Override
	public Nat div(Nat x) {
		return this.creerNatAvecValeur(this.val()/x.val());
	}

}
