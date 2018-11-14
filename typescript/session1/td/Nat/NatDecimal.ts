import {Nat} from "./Nat";
import {FabriqueNaturels} from "./FabriqueNaturels";

export class NatDecimal extends Nat {
    private val: string;
    public static fab: FabriqueNaturels<NatDecimal> = new NatDecimal("0");

    constructor(val: string){
        super();
        if (! new RegExp('^[0-9]*$').test(val)) {
            throw new TypeError('Val argument must be natural number (a positif integer)');
        }
        this.val = val;
    }

    creerNatValue(value: number): NatDecimal {
        return new NatDecimal('' + value);
    }

    creerNatString(value: string): NatDecimal {
        return new NatDecimal(value);
    }

    creerNatSucc(pred: Nat): NatDecimal {
        return this.creerNatValue(pred.getVal() + 1);
    }

    creerNatZero(): NatDecimal {
        return this.creerNatValue(0);
    }

    getVal(): number {
        return parseInt(this.val);
    }

    somme(num: Nat): Nat {
        let t : number = this.taille() < num.taille() ? num.taille() : this.taille() ;
        let rep : string = "" ;
        let retenue : number = 0 ;
        for(let i : number = 0 ; i<t ; i++) {
            let chiffre : number = this.chiffre(i) + num.chiffre(i) + retenue ;
            if(chiffre>9) {
                chiffre = chiffre - 10 ;
                retenue = 1 ;
            } else {
                retenue = 0 ;
            }
            rep = chiffre.toString() + rep ;
        }
        rep = retenue ==0 ? rep : 1 + rep ;
        return this.creerNatString(rep) ;
    }
}