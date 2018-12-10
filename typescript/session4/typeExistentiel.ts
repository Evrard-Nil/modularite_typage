class TableauExistentiel<M> {
  constructor(private tab: Array<M>) {
  }
  elimination<R>(k: <T extends M>(t: Array<T>) => R): R {
    return k(this.tab);
  }
}

// tslint:disable-next-line:no-any
function representationTableau(t: TableauExistentiel<any>): string {
  return t.elimination((array) => {
    let rep = [];
    for (let i = 0; i < array.length; i++) {
      rep.push(String(array[i]));
    }
    return rep.join(";");
  });
}

let array = ["a", "b", "c"];
// tslint:disable-next-line:no-any
console.log(representationTableau(new TableauExistentiel<any>(array)))