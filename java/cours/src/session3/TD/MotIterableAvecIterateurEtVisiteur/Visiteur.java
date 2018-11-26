public class Visiteur {
	public String visitRec(Mot mot) {
		return mot.element() + this.visitRec(mot.reste());
	}
}
