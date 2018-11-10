package session1.demo1.v2;

public interface Nat {
	default Nat somme(Nat x){
		return this.creer(this.getInt() + x.getInt());
	}
	int chiffre(int i);

	int taille();

	int getInt();
	
	Nat creer(int x);
	Nat creer(String chiffres);
}
