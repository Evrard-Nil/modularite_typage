package session3.TD.MotRecursif;

interface Mot {
	String getValue();
	int taille();

	default boolean estVide() {
		return false;
	}

	default boolean estInductif(){
		return false;
	}

	default boolean estConcat(){
		return false;
	}

	// Destructeurs
	default char premiereLettre(){
		throw new UnsupportedOperationException();
	}

	default Mot suite() {
		throw new UnsupportedOperationException();
	}

	default Mot gauche(){
		throw new UnsupportedOperationException();
	}

	default Mot droit(){
		throw new UnsupportedOperationException();
	}

	// Constructeurs
	default Mot vide(){
		return MotVideInductif.VIDE; 
	}

	default Mot motInduct(char n){
		return new MotNonVideInductif(n, this);
	}

	default Mot concat(Mot mot){
		return new MotConcat(this, mot);
	}
}
