package session3.TD.MotRecursif;

public interface FabriqueMot {
	Mot createInduct(char lettre, Mot next);
	Mot createFromConcat(Mot m1, Mot m2);
	Mot createVide();
	Mot createFromString(String mot);
}
