package session3.TD.MotIterableAvecIterateur;

enum MotVide implements Mot {
	VIDE;

	@Override
	public boolean estVide() {
		return true;
	}
	
	@Override
	public int taille() {
		return 0;
	}

}