package session3.TD.MotIterableAvecIterateurEtVisiteur;

import java.util.Iterator;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

interface Mot extends Iterable<Character> {
	default boolean estMotNonVide(){
		return false;
	}

	default boolean casUnion(){
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

	default <T> T accueilRecursif(Visiteur<T> v) {
		if (this.estVide()) {
			return v.casVide();
		}
		return v.estMotNonVide(this.element(), this.reste().accueilRecursif(v));
	}

	default <T> T accueil(Visiteur<T> v) {
		T r = v.casVide();
		for (int x : this) {
			r = v.estMotNonVide(x, r);
		}
		return r;
	}

	default <T> T accueilRecursif(Supplier<T> casVide, BiFunction<Character, T, T> estMotNonVide) {
		if (this.estVide()) {
			return casVide.get();
		}
		return estMotNonVide.apply(this.element(), this.reste().accueilRecursif(casVide, estMotNonVide));
	}

	default <T> T accueil(Supplier<T> casVide, BiFunction<Character, T, T> estMotNonVide) {
		T r = casVide.get();
		for (char x : this) {
			r = estMotNonVide.apply(x, r);
		}
		return r;
	}

	default <T> T filtrageRecursif(Supplier<T> casVide, BiFunction<Character, Mot, T> estMotNonVide) {
		if (this.estVide()) {
			return casVide.get();
		}
		return estMotNonVide.apply(this.element(), this.reste());
	}

	default <T> T filtrage(Supplier<T> casVide, BiFunction<Character, Mot, Function<T, T>> estMotNonVide) {
		T r = casVide.get();
		Mot arg = this.vide();
		Mot courant = this;
		while (!courant.estVide()) {
			char e = courant.element();
			r = estMotNonVide.apply(e, arg).apply(r);
			arg = arg.motNonVide(e);
			courant = courant.reste();
		}
		return r;
	}
}
