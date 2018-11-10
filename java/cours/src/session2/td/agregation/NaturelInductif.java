package session2.td.agregation;

public interface NaturelInductif extends EtatNaturelPur {
	
	@Override
	default EtatNaturelPur creerZero() {
		return new ZeroInductif();
	}
	
	@Override
	default EtatNaturelPur creerSuccesseur(EtatNaturelPur pred) {
		return new SuccInductif(pred);
	}
	
	@Override
	default EtatNaturelPur creerNatAvecValeur(int val) {
		if (val == 0)
			return this.creerZero();
		return this.creerSuccesseur(this.creerNatAvecValeur(val - 1));
	}
	
	
}
