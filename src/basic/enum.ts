// 基本
enum Fruit {
  Apple,
  Orange,
  Banana
}
console.log(Fruit.Apple); // -> 0
console.log(Fruit[0]); // -> Apple

// 関連付け数値を設定
enum NumberEnum {
  One = 1,
  Two = 2,
  Three = 3
}
console.log(NumberEnum.One);
