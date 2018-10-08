package session1.td;

public class NatDecimal implements Nat {
	

	public static final FabriqueNat<Nat> FAB = new NatDecimal("");
	private static final Nat DIX = FAB.creerNatAvecRepresentation("10"); 
	
	private String chiffres;
	
	private NatDecimal(String rep) {
		this.chiffres=rep;
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
	public Nat creerNatAvecValeur(int v) {
		return new NatDecimal(Integer.toString(v));
	}

	private static void nettoyer(StringBuilder s){
		int f = 0;
		while((f < s.length()) && Character.getNumericValue(s.charAt(f)) == 0){
			f++;
		}
		s.delete(0, f);
	}
	
	@Override
	public Nat creerNatAvecRepresentation(String rep) {
		StringBuilder temp = new StringBuilder(rep);
		nettoyer(temp);
		rep = new String(temp);
		if(rep.equals("")) rep = "0";
		char min = '0';
		char max = '9';
		int i= 0;
		for(i = 0; i < rep.length(); i++){
			if(rep.charAt(i) < min || rep.charAt(i) > max)	throw new IllegalArgumentException();
		}
		return new NatDecimal(rep);
	}

	@Override
	public Nat creerZero() {
		return this.creerNatAvecRepresentation("0");
	}
	
	@Override
	public Nat un() {
		return this.creerNatAvecRepresentation("1");
	}

	@Override
	public Nat creerSuccesseur(Nat predecesseur) {
		return this.creerNatAvecRepresentation(String.valueOf(predecesseur.val()+1));
	}

	@Override
	public Nat zero() {
		return this.creerZero();
	}

	@Override
	public Nat produit(Nat x) {	
		return null;
	}

	
	@Override
	public Nat modulo(Nat x) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Nat div(Nat x) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean estNul() {
		if(this.val()==0) {
			return true;
		}
		return false;
	}

	@Override
	public Nat predecesseur() {
		if(this.estNul()) throw new UnsupportedOperationException("This integer is null");
		return this.creerNatAvecRepresentation(String.valueOf(this.val()-1));
	}

	@Override
	public int chiffre(int i) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int taille() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int val() {
		return 0;
	}

	public String toString() {
		return String.valueOf(this.val());
	}

}
