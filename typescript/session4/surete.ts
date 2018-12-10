namespace variance {
    class A { }

    class B extends A {
        f(): void { }
    }

    // b -> a
    function produireErreurParCovariance(): void {
        let b: B = new B();
        let tabB: Array<B> = [b];
        let tabA: Array<A> = tabB;
        tabB[0].f();
    }

    // a -> b
    function produireErreurParContravariance(): void {
        let a: A = new A();
        let tabA: Array<A> = [a];
        let tabB: Array<B> = <Array<B>> tabA;
        tabA.push(a);
    }

    try {
        produireErreurParContravariance();
    } catch (e) {
        console.log(e);
    }
    console.log("********************************************************");
    try {
        produireErreurParCovariance();
    } catch (e) {
        console.log(e);
    }

    // ReadonlyArray est immutable donc ne pose pas de problèmes
}