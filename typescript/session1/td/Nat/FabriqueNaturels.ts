export interface FabriqueNaturels<T> {
    /**
     * create Nat with integer value
     */
    creerNatValue(value: number):T;

    /**
     * create Nat with string value
     */
    creerNatString(value: string):T;

    /**
     * create Nat with Successeur value
     */
    creerNatSucc(pred: T):T;

    /**
     * create null Nat (== 0)
     */
    creerNatZero():T;
}