package session1.demo1.v2;

public class NatDecimal implements Nat {
	private String chiffres;
	public NatDecimal(String rep) {
		char min = Character.forDigit(0, 10);
		char max = Character.forDigit(9, 10);
		for(int i = 0; i < rep.length(); i++){
			char c = rep.charAt(i);
			if(c < min)	throw new IllegalArgumentException();
			if(c > max) throw new IllegalArgumentException();
		}
		this.chiffres = rep;
	}
	public Nat somme(Nat x) {
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
    @Override
    public String toString() {
    	return this.chiffres;
    }
	@Override
	public int getInt() {
		return Integer.parseInt(this.chiffres);
	}
	@Override
	public boolean equals(Object x){
		if(!(x instanceof Nat)) return false;
		Nat n = (Nat)x;
		return this.getInt() == n.getInt();
	}
	@Override
	public Nat creer(int x) {
		return new NatDecimal(Integer.toString(x));
	}
	@Override
	public Nat creer(String chiffres) {
		return new NatDecimal(chiffres);
	}

}
