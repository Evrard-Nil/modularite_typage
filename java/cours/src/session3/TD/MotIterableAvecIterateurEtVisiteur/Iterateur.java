class Iterateur implements java.util.Iterator<Character> {
	private Mot reste;
	private char element;

	public Iterateur(Mot ens) {
		decomposer(ens);
	}

	private void decomposer(Mot ens) {
		while (true) {
			if (ens.estVide()) {
				this.reste = null;
				break;
			}
			if (ens.estMotNonVide()) {
				this.reste = ens.reste();
				this.element = ens.element();
				break;
			}
			if (ens.estConcat()) {
				if (ens.gauche().estVide()) {
					ens = ens.droit();
					continue;
				} else if (ens.gauche().estMotNonVide()) {
					this.reste = ens.gauche().reste().concat(ens.droit());
					this.element = ens.gauche().element();
					break;
				} else {
					ens = ens.gauche().gauche().concat(ens.gauche().droit().concat(ens.droit()));
					continue;
				}
			}
		}
	}

	public boolean aSuivant() {
		return reste != null;
	}

	public char suivant() {
		if (reste == null)
			throw new UnsupportedOperationException();
		char r = element;
		decomposer(reste);
		return r;
	}

	public Mot reste() {
		if (reste == null)
			throw new UnsupportedOperationException();
		return this.reste;
	}

	@Override
	public boolean hasNext() {
		return this.aSuivant();
	}

	@Override
	public Character next() {
		return this.suivant();
	}
}
