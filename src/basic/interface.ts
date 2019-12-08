// interface の宣言
interface InterfaceA {
  num: number;
  str: string;
  toString(): string;
}

// interface の実装
class InterfaceAImpl implements InterfaceA {
  num = 123;
  str = "ABC";
  toString(): string {
    return `AImpl - Number : ${this.num}, String : ${this.str}`;
  }
}
const aImpl = new InterfaceAImpl();
console.log(aImpl.toString());

// interface の継承
interface ExInterfaceA extends InterfaceA {
  bool: boolean;
}
class ExInterfaceAImpl implements ExInterfaceA {
  num = 123;
  str = "ABC";
  bool = true;
  toString(): string {
    return `ExAImpl - Number : ${this.num}, String : ${this.str}, Boolean : ${this.bool}`;
  }
}
const exAImpl = new ExInterfaceAImpl();
console.log(exAImpl.toString());
