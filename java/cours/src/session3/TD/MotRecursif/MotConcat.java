package session3.TD.MotRecursif;

public class MotConcat implements Mot{
	private Mot gauche;
	private Mot droit;

	public MotConcat(Mot g, Mot d) {
		this.gauche = g;
		this.droit = d;
	}

	@Override
	public int taille() {
		return this.gauche.taille() + this.droit.taille();
	}

	@Override
	public boolean estConcat() {
		return true;
	}
	
	@Override
	public char premiereLettre() {
		if(this.estVide()){
			throw new UnsupportedOperationException();
		}
		return this.gauche.estVide() ? this.droit.premiereLettre() : this.gauche.premiereLettre();
	}
	
	@Override
	public Mot suite() {
		if(this.estVide()){
			throw new UnsupportedOperationException();
		}
		return this.gauche.estVide() ? this.droit.suite() : new MotConcat(this.gauche.suite(), this.droit);
	}

	@Override
	public Mot gauche() {
		return this.gauche;
	}

	@Override
	public Mot droit() {
		return this.droit;
	}

	@Override
	public String getValue() {
		return this.gauche.getValue() + this.droit.getValue();
	}
}
