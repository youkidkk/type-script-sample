import * as typemoq from "typemoq";

import { TestClass } from "../src/fortest/testclass";

// モックオブジェクトの宣言
const mock: typemoq.IMock<TestClass> = typemoq.Mock.ofType<TestClass>();
// TestClass#judge(5) が呼び出された場合に true を返却するよう設定
mock.setup(m => m.judge(typemoq.It.isValue(5))).returns(() => true);

// 引数が一致した場合は設定した返却値が返却される -> true
console.log(mock.object.judge(5));
// 引数が一致しない場合は undefined となる
console.log(mock.object.judge(6));
