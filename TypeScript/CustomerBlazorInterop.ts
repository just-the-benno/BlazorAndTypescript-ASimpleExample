/// <reference path="testclass.ts" />

interface CustomerBlazorInterop {
    tester: TestClass;
}

declare interface Window {
    interop: CustomerBlazorInterop;
}


window.interop = {
    tester: new TestClass(),
}