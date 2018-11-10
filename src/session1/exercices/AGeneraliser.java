package session1.exercices;

interface I<T> {
	T somme(T x);
	T zero();
	T un();
	T modulo(T x);
	T div(T x);
}

public class AGeneraliser {

	public static int f(int x, int y){
		int r = 0;
		if(y == 0)
			return r;
		while(true){
			if(y == 1){
				return r + x;
			}
			if((y%2) == 1){
				r = r + x;
			}
			y = y / 2;
			x = x + x;
		}
	}
	
	public static <T extends I<T>> T produitAccelere(T x, T y) {
		T zero = x.zero();
		T resultat = zero;
		T un = x.un();
		T deux = un.somme(un);
		while(!y.equals(zero)){
			T reste = y.modulo(deux);
			if(!reste.equals(zero)){
				resultat = resultat.somme(x);
			}
			x = x.somme(x);
			y = y.div(deux);
		}
		return resultat;
	}
	
	public static void main(String[] args) {
		System.out.println("310 : " + f(10, 31));
		System.out.println("310 : " + f(10, 0));
	}

}
