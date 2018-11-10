package session1.demo1.v2;

public class TestAvecFabriques {

	public static void main(String[] args) {
		FabriqueNat fabD = new FabriqueNatDecimal();
		testerCourt(fabD);
		testerGrand(fabD);
		FabriqueNat fabI = new FabriqueNatParInt();
		testerCourt(fabI);
		testerGrand(fabI);
		testerInteroperabilite(fabD, fabI);
	}
	static void testerCourt(FabriqueNat fab){
		Nat x = fab.creerNatAvecValeur(75);
		System.out.println("150 ? " + x.somme(x));
		x = fab.creerNatAvecRepresentation("27");
		System.out.println("54 ? " + x.somme(x));
	}
	static void testerGrand(FabriqueNat fab){
		try{
			Nat x = fab.creerNatAvecValeur(2_000_000_000);
			System.out.println("4_000_000_000 ? " + x.somme(x));
			x = fab.creerNatAvecRepresentation("2000000000");
			System.out.println("4000000000 ? " + x.somme(x));
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	static void testerInteroperabilite(FabriqueNat fab1, FabriqueNat fab2){
		Nat x = fab1.creerNatAvecValeur(25);
		Nat y = fab2.creerNatAvecRepresentation("27");
		System.out.println("52 ? " + x.somme(y));
		System.out.println("52 ? " + y.somme(x));

	}

}
