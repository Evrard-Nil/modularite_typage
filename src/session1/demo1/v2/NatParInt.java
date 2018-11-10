package session1.demo1.v2;

public class NatParInt implements Nat {
	private int val;

	public NatParInt(int i) {
		if(i < 0)
			throw new IllegalArgumentException();
		this.val = i;
	}

	@Override
	public int getInt() {
		return this.val;
	}
	@Override
	public String toString() {
		return Integer.toString(this.getInt());
	}

	@Override
	public int chiffre(int i) {
		return (i == 0) ? this.getInt()%10 : (new NatParInt(this.getInt()/10)).chiffre(i-1);
	}

	@Override
	public int taille() {
		return (this.getInt() < 10) ? 1 : 1 + (new NatParInt(this.getInt() / 10)).taille();
	}
	@Override
	public boolean equals(Object x){
		if(!(x instanceof Nat)) return false;
		Nat n = (Nat)x;
		return this.getInt() == n.getInt();
	}

	@Override
	public Nat creer(int x) {
		return new NatParInt(x);
	}

	@Override
	public Nat creer(String chiffres) {
		return new NatParInt(Integer.parseInt(chiffres));
	}

}
