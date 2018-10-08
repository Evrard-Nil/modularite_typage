package session1.td;

public interface FabriqueNat<T> {

	/*
	* 
	*/
	T creerNatAvecValeur(int v);
	
	/*
	 * 
	 */
	T creerZero();
	
	/*
	 * 
	 */
	T creerSuccesseur(T predecesseur);
	
	/*
	 * 
	 */
	 T creerNatAvecRepresentation(String str);
}
