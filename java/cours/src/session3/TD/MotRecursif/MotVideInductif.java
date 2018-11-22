package session3.td;

public class MotVideInductif implements Mot {
	public static MotVideInductif VIDE = new MotVideInductif();
	
	private MotVideInductif() {}

	@Override
	public String getValue() {
		return "";
	}

	@Override
	public int taille() {
		return 0;
	}
	
	@Override
	public boolean estVide() {
		return true;
	}
}
