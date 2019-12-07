// Type: boolean -> true/false
let bool: boolean;
bool = false;
bool = true;
console.log(bool);

// Type: number
let num: number;
num = 123;
console.log(num);
num = 0.123;
console.log(num);
// binary
num = 0b0101;
console.log(num);
// hex
num = 0xff;
console.log(num);

// Type: string
let str: string;
str = "Type";
str += "Script";
console.log(str);

// Type: array
const ary: number[] = [1, 2, 3];
ary.push(4, 5);
console.log(ary);

// Type: tuple
const tpl: [string, number] = ["text", 123];
console.log(tpl);
// tpl = [123, 234]; -> type error

// Type: any
const anyary: any[] = [];
anyary.push(123);
anyary.push("string");
console.log(anyary);

// Type: void
function voidFunction(): void {
  console.log("Void function");
}
voidFunction();
