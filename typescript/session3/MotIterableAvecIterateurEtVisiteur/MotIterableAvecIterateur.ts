import { MotVide } from "./MotVide";
import { Mot } from "./Mot";
import { Char } from "../Char";

var a: Mot = MotVide.getInstance().mot(new Char('a'));
var b: Mot = MotVide.getInstance();
for (let i = 0; i < 10000000; i++) {
  b = b.concat(a);
}
let s = "";
for (let x in b) {
  s = s + x;
}
console.log(s);
