// type
type SampleType = { id: number; name: string };

const sampleType: SampleType = { id: 123, name: "Name" };
console.log(sampleType);

// typeの拡張
type ExSampleType = SampleType & { age: number };
const exSampleType: ExSampleType = { id: 234, name: "Name", age: 40 };
console.log(exSampleType);
