package session3.TD.MotIterable;

enum MotVide implements Mot {
	VIDE;

	@Override
	public int taille() {
		return 0;
	}

	@Override
	public boolean estVide() {
		return true;
	}

}
