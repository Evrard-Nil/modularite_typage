package session1.demo1.v1;

public class NatParInt {
	private int val;

	public NatParInt(int i) {
		if(i < 0)
			throw new IllegalArgumentException();
		this.val = i;
	}

	public NatParInt somme(NatParInt x){
		return new NatParInt(this.getInt() + x.getInt());
	}

	public int getInt() {
		return this.val;
	}
	@Override
	public String toString() {
		return Integer.toString(this.getInt());
	}
}
