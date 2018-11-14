export interface EtatNaturel<T> {
    val() : number;

    estNul() : boolean;

    predecesseur() : T;

    chiffre(val : number) : number;

    taille() : number;
}
