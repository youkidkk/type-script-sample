class ConstructorSample {
  // 引数に public/private修飾子を付与
  // -> 指定した可視性でフィールドが作成される
  constructor(public publicField: number, private privateField: number) {}

  public toString(): string {
    return `ConstructorSample - Public : ${this.publicField}, Private : ${this.privateField}`;
  }
}

const constructorSample = new ConstructorSample(123, 234);
console.log(constructorSample.toString());
console.log(constructorSample.publicField);
// 以下は不可視となるためエラーとなる
// console.log(constructorSample.privateField);
