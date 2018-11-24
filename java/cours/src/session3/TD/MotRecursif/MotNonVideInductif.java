package session3.TD.MotRecursif;

public class MotNonVideInductif implements Mot {
	private char first;
	private Mot suite;

	public MotNonVideInductif(char first, Mot suite) {
		this.first = first;
		this.suite = suite;
	}

	@Override
	public int taille() {
		return 1 + suite.taille();
	}

	@Override
	public boolean estConcat() {
		return true;
	}

	@Override
	public char premiereLettre() {
		return this.first;
	}

	@Override
	public Mot suite() {
		return this.suite;
	}

	@Override
	public String getValue() {
		return this.first + this.suite.getValue();
	}
}
