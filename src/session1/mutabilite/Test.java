package session1.mutabilite;

import session1.demo1.v2.FabriqueNat;
import session1.demo1.v2.Nat;

public class Test {

	public static void main(String[] args) {
		FabriqueNat fab = new FabriqueNatDecimal();
		comparerMutabilite(fab);
		fab = new FabriqueNatParInt();
		comparerMutabilite(fab);
		fab = new session1.demo1.v2.FabriqueNatDecimal();
		comparerMutabilite(fab);
		fab = new session1.demo1.v2.FabriqueNatParInt();
		comparerMutabilite(fab);
	}

	static void comparerMutabilite(FabriqueNat fab){
		System.out.println("--------------------------------");
		Nat n7 = fab.creerNatAvecValeur(7);
		Nat n1 = fab.creerNatAvecRepresentation("1");
		System.out.println("n7 : " + n7);
		System.out.println("classe " + fab.getClass() + " : " + n7.equals(n7.somme(n1)));
		System.out.println("n7 : " + n7);
		System.out.println("--------------------------------");
	}
	
}
