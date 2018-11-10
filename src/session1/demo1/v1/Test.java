package session1.demo1.v1;

import session1.demo1.v2.Nat;
import session1.demo1.v2.NatDecimal;

public class Test {

	public static void main(String[] args) {
		
		Nat x = new NatDecimal("75");
		System.out.println("150 ? " + x.somme(x));
		
		x = new NatDecimal("2000000000");
		System.out.println("4000000000 ? " + x.somme(x));
		
		NatParInt y = new NatParInt(85);
		System.out.println("170 ? " + y.somme(y));
		
		y = new NatParInt(2_000_000_000);
		System.out.println("4000000000 ? " + y.somme(y));
	}
	
}
 