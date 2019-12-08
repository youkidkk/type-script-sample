export class TestClass {
  constructor(private min: number) {}

  public judge(num: number): boolean {
    return num > this.min;
  }
}
