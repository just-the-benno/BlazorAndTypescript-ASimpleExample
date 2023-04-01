var TestClass = /** @class */ (function () {
    function TestClass() {
    }
    TestClass.prototype.logA = function () {
        console.log("A");
    };
    TestClass.prototype.logB = function () {
        console.log("A");
    };
    return TestClass;
}());
/// <reference path="testclass.ts" />
window.interop = {
    tester: new TestClass(),
};
//# sourceMappingURL=../../TypeScript/wwwroot/js/output.js.map