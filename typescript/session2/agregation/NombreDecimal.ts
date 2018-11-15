import {EtatNaturelPur} from "./EtatNaturelIPur";

export class NombreDecimal extends EtatNaturelPur{
    private chiffres : string;

    constructor(repDecimal : string) {
        super();
        this.chiffres = repDecimal;
    }

    val(): number {
        return parseInt(this.chiffres);
    }

    estNul(): boolean {
        return NombreDecimal.nettoyer(this.chiffres) === "";
    }

    predecesseur(): EtatNaturelPur {
        throw new Error("TODO");
    }

    chiffre(i: number): number {
        if(i < this.taille()) {
            return parseInt(this.chiffres.charAt(this.chiffres.length - 1 - i));
        }
        return 0;    }

    taille(): number {
        return this.chiffres.length;
    }

    creerNatString(value: string): EtatNaturelPur {
        let repDecimalecimale = NombreDecimal.nettoyer(value);
        if(repDecimalecimale == ""){
            repDecimalecimale = "0";
        }
        for(let i = 0; i < repDecimalecimale.length; i++){
            let c = repDecimalecimale.charAt(i);
            if(isNaN(Number(c)))	{
                throw new Error('Parameter should be a number');
            }
        }
        return new NombreDecimal(repDecimalecimale);
    }

    public static nettoyer(s : string) : string {
        let debut : number = 0;
        while((debut < s.length) && s.charAt(debut) == '0'){
            debut++;
        }
        return s.substring(debut, s.length);
    }
}
