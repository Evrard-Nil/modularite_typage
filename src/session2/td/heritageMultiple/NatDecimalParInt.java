package session2.td.heritageMultiple;

import session1.td.Nat;

public class NatDecimalParInt extends NombreDecimal implements AlgebreNatParInt {

	public NatDecimalParInt(String rep) {
		super(rep);
	}

	@Override
	public Nat creerNatAvecRepresentation(String repDecimale) {
		// Nettoyer
		StringBuilder repMutable = new StringBuilder(repDecimale);
		int debut = 0;
		int fin = 0;
		while((fin < repMutable.length()) && Character.getNumericValue(repMutable.charAt(fin)) == 0){
			fin++;
		}
		repMutable.delete(debut, fin);
		
		repDecimale = new String(repMutable);
		if(repDecimale.equals("")){
			repDecimale = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimale.length(); i++){
			char c = repDecimale.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NatDecimalParInt(repDecimale);
	}
	
	@Override
	public boolean equals(Object x){
		if(!(x instanceof Nat)) return false;
		Nat n = (Nat)x;
		return this.toString().equals(n.toString());
	}

    @Override
    public String toString() {
    	return this.representer();
    }
}
