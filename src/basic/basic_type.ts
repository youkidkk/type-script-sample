// boolean : true/false
let bool: boolean;
bool = false;
bool = true;
console.log(bool);

// number
let num: number;
num = 123;
console.log(num);
num = 0.123;
console.log(num);
// number - binary
num = 0b0101;
console.log(num);
// number - hex
num = 0xff;
console.log(num);

// string
let str: string;
str = "Type";
str += "Script";
console.log(str);

// array
const ary: number[] = [1, 2, 3];
ary.push(4, 5);
console.log(ary);

// tuple
const tpl: [string, number] = ["text", 123];
console.log(tpl);
// tpl = [123, 234]; -> type error

// any
const anyary: any[] = [];
anyary.push(123);
anyary.push("string");
console.log(anyary);

// void
function voidFunction(): void {
  console.log("Void function");
}
voidFunction();
