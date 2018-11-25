package session3.TD.MotIterable;


interface Mot {
	default boolean estMotNonVide(){
		return false;
	}
	
	default boolean estConcat(){
		return false;
	}
	
	default char element(){
		throw new UnsupportedOperationException();
	}
	
	default Mot reste() {
		throw new UnsupportedOperationException();
	}
	
	default Mot gauche(){
		throw new UnsupportedOperationException();
	}
	
	default Mot droit(){
		throw new UnsupportedOperationException();
	}
	
	default Mot vide(){
		return MotVide.VIDE; 
	}
	
	default Mot mot(char n){
		return new MotNonVide(n, this);
	}
	
	default Mot concat(Mot ens){
		return new MotConcat(this, ens);
	}
	
	int taille();
	
	default boolean estVide(){
		return this.taille() == 0;
	}

}
