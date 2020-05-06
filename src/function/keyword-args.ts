function keywordArg({
  name = "Gonbe",
  age = 20
}: {
  name?: string;
  age?: number;
}): string {
  return `Name: ${name}, Age: ${age}`;
}

console.log(keywordArg({}));
console.log(keywordArg({ name: "Taro" }));
console.log(keywordArg({ age: 30 }));
