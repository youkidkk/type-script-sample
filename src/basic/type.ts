// type による型宣言
type TypeA = { num: number; str: string };

// type型の実態の宣言
const typeA: TypeA = { num: 123, str: "String" };
// 以下は type error
// const typeA: TypeA = { num: "Number", str: 123 };
console.log(typeA);

// type の拡張
type ExTypeA = TypeA & { bool: boolean };
const exTypeA: ExTypeA = { num: 234, str: "String", bool: true };
console.log(exTypeA);

// 交差型
type TypeB = { bool: boolean };
type TypeCross = TypeA & TypeB;
const typeCross: TypeCross = { num: 345, str: "String", bool: true };
console.log(typeCross);
