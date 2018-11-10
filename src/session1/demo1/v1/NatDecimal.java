package session1.demo1.v1;

public class NatDecimal {
	private String chiffres;
	public NatDecimal(String rep) {
		this.chiffres = rep;
	}
	public NatDecimal somme(NatDecimal x) {
		int t = this.taille() < x.taille() ? x.taille() : this.taille();
		StringBuilder rep = new StringBuilder();
		int retenue = 0;
		for(int i = 0; i < t; i++){
			int chiffre = this.chiffre(i) + x.chiffre(i) + retenue;
			if(chiffre > 9){
				chiffre = chiffre - 10;
				retenue = 1;
			}else{
				retenue = 0;
			}
			rep.append(Integer.toString(chiffre));
		}
		rep = retenue == 0 ? rep : rep.append(1);
		return new NatDecimal(rep.reverse().toString());
	}

    public int chiffre(int i){
    	if(i < this.taille())
    		return Character.getNumericValue(chiffres.charAt(chiffres.length() -1 -i));
    	return 0;
    }
    public int taille(){
    	return chiffres.length();
    }
    @Override
    public String toString() {
    	return this.chiffres;
    }
}
