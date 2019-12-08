// ■ テストの実行
// npm run test
// ■ カバレッジの計測
// npm run coverage

import * as chai from "chai";

import { TestClass } from "../src/fortest/testclass";

describe("TestClass#judge", () => {
  it("Return true", () => {
    const testClass = new TestClass(10);
    chai.assert.isTrue(testClass.judge(11));
  });
  it("Return false", () => {
    const testClass = new TestClass(10);
    chai.assert.isFalse(testClass.judge(10));
  });
});
