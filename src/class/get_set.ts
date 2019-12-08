class GetSetSample {
  constructor(private _field: number) {}

  // Getter
  get field(): number {
    return this._field;
  }

  // Setter
  set field(value: number) {
    this._field = value;
  }
}

const getSetSample = new GetSetSample(123);
// Getter 呼び出し
console.log(getSetSample.field);
// Setter 呼び出し
getSetSample.field = 234;
