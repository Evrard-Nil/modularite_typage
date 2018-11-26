class MotNonVide implements Mot {
	private char element;
	private Mot reste;
	private int taille;

	public MotNonVide(char i, Mot ens) {
		this.element = i;
		this.reste = ens;
		this.taille = 1 + ens.taille();
	}

	@Override
	public boolean estMotNonVide() {
		return true;
	}

	@Override
	public int taille() {
		return this.taille;
	}

	@Override
	public char element() {
		return this.element;
	}

	@Override
	public Mot reste() {
		return this.reste;
	}
}
