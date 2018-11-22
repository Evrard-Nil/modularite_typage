package session3.td;

public interface FabriqueMot {
	Mot createInduct(char lettre, Mot next);
	Mot createFromConcat(Mot m1, Mot m2);
	Mot createVide();
	Mot createFromString(String mot);
}
