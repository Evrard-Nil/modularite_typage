// tslint:disable:no-any
interface ModuleFile<F, E> {
  vide(): F;
  ajout(e: E, f: F): F;
  retrait(f: F): [E, F];
  estVide(f: F): boolean;
}

interface Liste<E> {
  filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R): R;
}

class ListeVide<E> implements Liste<E> {
  filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R) {
    return casVide();
  }
}

class ListeCons<E> implements Liste<E> {
  constructor(private tete: E, private reste: Liste<E>) {
  }
  filtrage<R>(casVide: () => R, casCons: (t: E, r: Liste<E>) => R) {
    return casCons(this.tete, this.reste);
  }
}

function vide<E>(): Liste<E> {
  return new ListeVide();
}

function cons<E>(tete: E, reste: Liste<E>): Liste<E> {
  return new ListeCons(tete, reste);
}

function couple<A, B>(x: A, y: B): [A, B] {
  return [x, y];
}

function miroir<E>(liste: Liste<E>): any {
  liste = liste.filtrage<Liste<E>>(() => {
    return new ListeVide<E>();
  }, (tete: E, reste: Liste<E>) => {
      miroir(reste);
      return join<E>(reste, tete);
    })
}

function join<E>(debut: Liste<E>, fin: E): Liste<E> {
  return debut.filtrage<Liste<E>>(() => {
    return new ListeCons(fin, debut);
  },
    (tete: E, reste: Liste<E>) => {
      return new ListeCons(tete, join<E>(reste, fin));
    })
}

class ModuleFileParListe<E> implements ModuleFile<Liste<E>, E>{

  vide(): Liste<E> {
    return new ListeVide();
  }
  ajout(e: E, f: Liste<E>): Liste<E> {
    miroir(f);
    var liste = new ListeCons(e, f);
    miroir(liste);
    return liste;
  }
  retrait(f: Liste<E>): [E, Liste<E>] {
    return f.filtrage<[E, Liste<E>]>(() => {
      throw new Error("Unsupported Operation Exception");
    },
      (tete: E, reste: Liste<E>) => {
        return [tete, reste];
      });
  }
  estVide(f: Liste<E>): boolean {
    return f.filtrage<boolean>(() => true, (t: E, r: Liste<E>) => false)
  }
}

class ModuleFileParDeuxListes<E> implements ModuleFile<[Liste<E>, Liste<E>], E>{

  vide(): [Liste<E>, Liste<E>] {
    return [new ListeVide(), new ListeVide()];
  }
  ajout(e: E, f: [Liste<E>, Liste<E>]): [Liste<E>, Liste<E>] {
    var liste = new ListeCons(e, f[0]);
    return [liste, f[1]];
  }
  retrait(f: [Liste<E>, Liste<E>]): [E, [Liste<E>, Liste<E>]] {
    return f[1].filtrage<[E, [Liste<E>, Liste<E>]]>(
      () => {
        var liste = f[0];
        miroir(liste);
        return liste.filtrage<[E, [Liste<E>, Liste<E>]]>(
          () => { throw new Error("Unsupported Operation Exception") },
          (t: E, r: Liste<E>) => {
            return [t, [new ListeVide(), r]];
          }
        )
      },
      (tete: E, reste: Liste<E>) => {
        return [tete, [f[0], reste]];
      }
    )
  }
  estVide(f: [Liste<E>, Liste<E>]): boolean {
    return f[0].filtrage<boolean>(
      () => {
        return f[1].filtrage<boolean>(
          () => true,
          (t: E, r: Liste<E>) => false
        )
      },
      (tete: E, reste: Liste<E>) => false
    )
  }
}

class ModuleFileAbstrait<E> {
  constructor(private liste: ModuleFile<any, E>) {
  }
  elimination<R>(k: (t: ModuleFile<any, E>) => R): R {
    return k(this.liste);
  }
}
// Fabrique
function abstraction<F, E>(modFile: ModuleFile<F, E>): ModuleFileAbstrait<E> {
  return new ModuleFileAbstrait<E>(modFile);
}

function representation<M, E>(modFile: ModuleFile<M, E>, f: M): string {
  var chaine: string = "";
  var elt = f;
  while (!modFile.estVide(elt)) {
    let retour = modFile.retrait(elt);
    chaine = retour[0] + ";" + chaine;
    elt = retour[1];
  }
  return chaine;
}


test();

function test() {
  let module = abstraction(new ModuleFileParListe<number>());
  let liste = module.elimination((modFile) => modFile.vide());
  liste = module.elimination((modFile) => modFile.ajout(3, liste));
  liste = module.elimination((modFile) => modFile.ajout(4, liste));
  liste = module.elimination((modFile) => modFile.ajout(5, liste));
  console.log(representation(module.elimination((k) => k), liste));
  let o = module.elimination((modFile) => modFile.retrait(liste));
  console.log(o[0]);
  console.log(representation(module.elimination((k) => k), o[1]));
}
