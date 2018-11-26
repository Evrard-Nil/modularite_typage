import java.util.Iterator;

interface Mot extends Iterable<Character> {
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

	default Mot motNonVide(char n){
		return new MotNonVide(n, this);
	}

	default Mot concat(Mot ens){
		return new MotConcat(this, ens);
	}

	int taille();

	default boolean estVide(){
		return this.taille() == 0;
	}

	default Iterateur iterateur(){
		return new Iterateur(this);
	}

	default 	
	public Iterator<Character> iterator() {
		return this.iterateur();
	}
	
	default void accept(Visiteur visitor) {
		visitor.visitRec(this);
	}
}
