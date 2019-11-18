import { EXP_CONST, expFunc, ExpClass } from "@/import/module";

console.log(EXP_CONST);

const result = expFunc("Test");
console.log(result);

const instance = new ExpClass("Test");
instance.print();
