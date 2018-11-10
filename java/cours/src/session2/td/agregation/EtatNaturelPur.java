package session2.td.agregation;

import session1.td.FabriqueNaturels;

public interface EtatNaturelPur extends EtatNaturel<EtatNaturelPur>, FabriqueNaturels<EtatNaturelPur>{
	

	default EtatNaturelPur creerZero() {
		return creerNatAvecValeur(0);
	}

	default EtatNaturelPur creerSuccesseur(EtatNaturelPur val) {
		return this.creerNatAvecValeur(val.val()+1);
	}
	
	default EtatNaturelPur creerNatAvecValeur(int val) {
		return this.creerNatAvecRepresentation(Integer.toString(val));
	}
	
	default EtatNaturelPur creerNatAvecRepresentation(String repDecimale) {
		return this.creerNatAvecValeur(Integer.parseInt(repDecimale));
	}
	
}
