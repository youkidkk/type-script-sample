function method(): string;
function method(num: number): string;
function method(num: number, text: string): string;
function method(num?: number, text?: string): string {
  return `Number: ${num || 0}, Text: ${text || "-"}`;
}

console.log(method());
console.log(method(123));
console.log(method(123, "text"));
