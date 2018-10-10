package session1.td;

public class Test {

	public static void main(String[] args) {
		test(NatParInt.FAB);
		test(Zero.FAB);
		test(Succ.FAB);
		test(ZeroRec.FAB);
		test(SuccRec.FAB);
		test(NatDecimal.FAB);
	}
	
	
	private static void test(FabriqueNat<Nat> fab) {
		
		System.out.println("**************************************************************************************");
		Nat zero = fab.creerZero();
		System.out.println(" 0 ? " + zero);
		System.out.println(" true ? " + zero.equals(zero.zero()));
		Nat un = fab.creerSuccesseur(zero);
		System.out.println(" 1 ? " + un);
		System.out.println(" true ? " + un.equals(un.un()));
		zero = un.predecesseur();
		System.out.println(" 0 ? " + zero);
		Nat cinq = fab.creerNatAvecValeur(5);
		System.out.println(" 5 ? " + cinq);
		System.out.println(" 4 ? " + cinq.predecesseur());
		Nat six = fab.creerNatAvecValeur(6);
		System.out.println(" 6 ? " + six);
		System.out.println(" 5 + 6 = 11 ? " + cinq.somme(six));
		System.out.println(" 5 * 6 = 30 ? " + cinq.produit(six));
		Nat troisTrois = fab.creerNatAvecValeur(33);
		System.out.println(" quotient de 33 / 6 = 5 ? " + troisTrois.div(six));
		System.out.println(" reste de 33 / 6 = 3 ? " + troisTrois.modulo(six));		
		/*
		 * StackOverflowException
		try {
			Nat deuxM = fab.creerNatAvecValeur(2_000_000_000);
			System.out.println("4_000_000_000 ? " + deuxM.somme(deuxM).toString());
		}
		catch(Exception e) {
			System.out.println(e.getMessage());
		}*/
		
	}

}