package session3.TD.MotIterable;

public class MotsIterables {

	public static void main(String[] args) {
		Mot a = MotVide.VIDE.mot('a');
		Mot b = MotVide.VIDE;
		for(int i = 0; i < 10000000; i++){
			b = b.concat(a);
		}
		int s = 0;
		while(!b.estVide()){
			s = s + b.element();
			b = b.reste(); 
		}
		System.out.println(s);
	}

}
