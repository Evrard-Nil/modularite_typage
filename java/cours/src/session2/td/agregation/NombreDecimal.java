package session2.td.agregation;

public class NombreDecimal implements EtatNaturelPur{
	
	private String chiffres;
	
	public NombreDecimal(String repDecimal) {
		chiffres = repDecimal;
	}

	@Override
	public int val() {
		return Integer.parseInt(this.chiffres);
	}
	
	@Override
	public boolean estNul() {
		// Peut être simplifié du fait du nettoyage ("0" pour zéro)
		for(int i = 0; i < this.taille(); i++){
			if(this.chiffre(i) != 0){
				return false;
			}
		}
		return true;
	}
	
	@Override
	public EtatNaturelPur predecesseur() {
		return null;
	}

	@Override
    public int chiffre(int i){
    	if(i < this.taille())
    		return Character.getNumericValue(chiffres.charAt(chiffres.length() -1 -i));
    	return 0;
    }


	@Override
    public int taille(){
    	return chiffres.length();
    }
	
	public EtatNaturelPur creerNatAvecRepresentation(String repDecimalecimale) {
		StringBuilder repMutable = new StringBuilder(repDecimalecimale);
		nettoyer(repMutable);
		repDecimalecimale = new String(repMutable);
		if(repDecimalecimale.equals("")){
			repDecimalecimale = "0";
		}
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < repDecimalecimale.length(); i++){
			char c = repDecimalecimale.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		return new NombreDecimal(repDecimalecimale);
	}


	private static void nettoyer(StringBuilder s){
		int debut = 0;
		int fin = 0;
		while((fin < s.length()) && Character.getNumericValue(s.charAt(fin)) == 0){
			fin++;
		}
		s.delete(debut, fin);
	}
}
