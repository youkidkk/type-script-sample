export const EXP_CONST = "Export Const";

export function expFunc(arg: string): string {
  return `Arg : ${arg}`;
}

export class ExpClass {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  public print(): void {
    console.log(`Value : ${this.value}`);
  }
}
