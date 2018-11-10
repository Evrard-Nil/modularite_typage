package session2.td.agregation;

public interface EtatNaturel<T> {

	public int val();
	
	public boolean estNul();
	
	public T predecesseur();
	
	public int chiffre(int val);
	
	public int taille();
}
