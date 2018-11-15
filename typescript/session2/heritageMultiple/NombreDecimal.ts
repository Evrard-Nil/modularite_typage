import {Nat} from "../../session1/td/Nat/Nat";

export abstract class NombreDecimal extends Nat{

    private chiffres : string;

    constructor(rep : string) {
        super();
        this.chiffres = rep;
    }

    creerNatAvecValeur(x : number) : Nat {
        return this.creerNatString('' + x);
    }

    creerZero() : Nat {
        return this.creerNatString("0");
    }

    creerSuccesseur(predecesseur : Nat) : Nat{
        return this.creerNatString('' + (predecesseur.getVal() + 1));
    }

    chiffre(i : number) : number{
        if(i < this.taille())
            return parseInt((''+this.chiffres).charAt(this.taille() -1 -i));
        return 0;
    }

    taille() : number{
        return this.chiffres.length;
    }

    getVal() : number {
        return parseInt(this.chiffres);
    }

    public static nettoyer(s : string) : string {
        let debut : number = 0;
        while((debut < s.length) && s.charAt(debut) == '0'){
            debut++;
        }
        return s.substring(debut, s.length);
    }

    estNul() : boolean{
        return NombreDecimal.nettoyer(this.chiffres) == '';
    }

    predecesseur() : Nat {
        if(this.estNul()){
            throw new Error();
        }
        return this.creerNatAvecValeur(this.getVal() - 1);
    }
}
