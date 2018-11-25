package session3.TD.MotIterable;

class MotConcat implements Mot {

	private Mot gauche;
	private Mot droit;
	private int taille;
	
	private char element;
	private Mot reste;

	public MotConcat(Mot g, Mot d) {
		this.gauche = g;
		this.droit = d;
		this.taille = g.taille() + d.taille();
	}

	@Override
	public int taille() {
		return this.taille;
	}

	@Override
	public boolean estConcat() {
		return true;
	}
	
	private void decomposer(){
		Mot courant = this;
		while(true){
			if(courant.estMotNonVide()){ // Cons
				this.reste = courant.reste();
				this.element = courant.element();
				return;
			}else{ // concat
				if(courant.gauche().estVide()){
					courant = courant.droit();
				}else if(courant.gauche().estMotNonVide()){
					this.reste = courant.gauche().reste().concat(courant.droit());
					this.element = courant.gauche().element();
					return;
				}else{
					courant = courant.gauche().gauche().concat(courant.gauche().droit().concat(courant.droit()));
				}
			}
		}
	}
	
	@Override
	public char element() {
		if(this.estVide()){
			throw new UnsupportedOperationException();
		}
		if(this.reste != null){
			return this.element;
		}
		decomposer();
		return this.element;
	}
	
	@Override
	public Mot reste() {
		if(this.estVide()){
			throw new UnsupportedOperationException();
		}
		if(this.reste != null){
			return this.reste;
		}
		decomposer();
		return this.reste;
	}

	@Override
	public Mot gauche() {
		return this.gauche;
	}

	@Override
	public Mot droit() {
		return this.droit;
	}

}
