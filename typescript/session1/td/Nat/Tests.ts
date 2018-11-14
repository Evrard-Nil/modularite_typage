import {FabriqueNaturels} from "./FabriqueNaturels";
import {Nat} from "./Nat";
import {NatDecimal} from "./NatDecimal";
import {Zero} from "./Zero";
import {NatParInt} from "./NatParInt";
import {NatSucc} from "./NatSucc";
import {NatSuccRec} from "./NatSuccRec";

function test(fab: FabriqueNaturels<Nat>){
    //test whith 0
    let zero: Nat = fab.creerNatZero();
    console.log('0 = ', zero.getVal());

    console.log('0 == 0 :', zero.equals(zero.zero()));
    if(!zero.equals(zero.zero())){
        throw new Error('error in test zero == zero.zero()');
    }

    //test whith 1
    let un: Nat = fab.creerNatSucc(zero);
    console.log('1 = ', un.getVal());

    console.log('1 == 1 :', un.equals(un.un()));
    if(!un.equals(un.un())){
        throw new Error('error in test un == un.un()');
    }

    let pred: Nat = un.predecesseur();
    if(!pred.equals(pred.zero())){
        throw new Error('error in test pred == pred.zero()');
    }

    let cinq: Nat = fab.creerNatValue(5);
    console.log('5 = ', cinq.getVal());
    if(cinq.getVal() != 5){
        throw new Error('error in test 5 == cinq.getValue()');
    }

    console.log('4 = ', cinq.predecesseur().getVal());
    if(cinq.predecesseur().getVal() != 4){
        throw new Error('error in test 4 == cinq.predecesseur.getValue()');
    }

    let six: Nat = fab.creerNatValue(6);

    let somme: Nat = cinq.somme(six);
    console.log('5 + 6 = ', somme.getVal());
    if(somme.getVal() != 11){
        throw new Error('error in test 5 + 6');
    }

    let prod: Nat = cinq.produit(six);
    console.log('5 * 6 = ', prod.getVal());
    if(prod.getVal() != 30){
        throw new Error('error in test 5 * 6');
    }

    let nb33: Nat = fab.creerNatValue(33);

    let div: Nat = nb33.div(six);
    console.log('33 / 6 = ', div.getVal());
    if(div.getVal() != 5){
        throw new Error('error in test 33 / 6');
    }

    let modulo: Nat = nb33.modulo(six);
    console.log('33 % 6 = ', modulo.getVal());
    if(modulo.getVal() != 33%6){
        throw new Error('error in test 33 % 6');
    }

    try {
        let bigNb: Nat = fab.creerNatValue(2000000000);
        let bigSomme: Nat = bigNb.somme(bigNb);
    } catch {}
}

console.log("------------------ Test NatParInt ------------------");
test(NatParInt.fab);
console.log("------------------ Test Zero ------------------");
test(Zero.fab);
console.log("------------------ Test NatSucc ------------------");
test(NatSucc.fab);
console.log("------------------ Test NatDecimal ------------------");
test(NatDecimal.fab);
console.log("------------------ Test NatSuccRec ------------------");
test(NatSuccRec.fab);