class BasicSample {
  // public field
  public publicField: string;
  // private field
  private privateField: string;
  // default -> public field
  defaultField: string;

  constructor(publicField: string, privateField: string, defaultField: string) {
    this.publicField = publicField;
    this.privateField = privateField;
    this.defaultField = defaultField;
  }

  public publicFunction(): void {
    console.log(`
      Public:  ${this.publicField}
      Private: ${this.privateField}
      Default: ${this.defaultField}
    `);
  }
}

const sample = new BasicSample(
  "public sample",
  "private sample",
  "default sample"
);
sample.publicFunction();
sample.publicField = "public!!!";
sample.defaultField = "default!!!";
// sample.privateField = "private!!!"; -> Error
sample.publicFunction();
