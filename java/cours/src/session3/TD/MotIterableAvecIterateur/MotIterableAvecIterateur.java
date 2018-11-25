package session3.TD.MotIterableAvecIterateur;

public class MotIterableAvecIterateur {

	public static void main(String[] args) {
		Mot a = MotVide.VIDE.motNonVide('a');
		Mot b = MotVide.VIDE;
		for(int i = 0; i < 10000000; i++){
			b = b.concat(a);
		}
		int s = 0;
		for(int x : b){
			s = s + x;
		}
		System.out.println(s);
	}

}

