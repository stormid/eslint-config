// https://eslint.org/docs/rules/arrow-body-style
// Fail:
// const arrowBodyStyle = (test) => test;
// Pass:
const arrowBodyStyle = n => n + 1;
arrowBodyStyle();

// https://eslint.org/docs/rules/arrow-parens
// Fail:
// const arrowParens = p => () => {
//     return p * 2;
// };
// Pass:
const arrowParens = test => () => test;
arrowParens();

// https://eslint.org/docs/rules/arrow-spacing
// Fail:
// const arrowSpacing = test=> ()=>test;
// Pass:
const arrowSpacing = test => () => test;
arrowSpacing();

// https://eslint.org/docs/rules/brace-style
// Fail:
// const braceStyle = n => () => {
//     if (n === 0)
//     {
//         return n;
//     }
//     else {
//         return n + 1;
//     }
// };
// Pass:
const braceStyle = n => () => {
    try {
        if (n === 0) ++n;
        else {
            return n + 1;
        }
    } catch (e) {
        return 0;
    }
};
braceStyle();


// https://eslint.org/docs/rules/camel-case
// Fail:
// const camel_case = () => ({
//     property_one: 1,
//     property_two: 2
// });
// Pass:
const camelCase = () => ({
    propertyOne: 1,
    propertyTwo: 2
});
camelCase();

// https://eslint.org/docs/rules/comma-style
// Fail:
// const commaStyle = () => ({
//     propertyOne: 1
//     ,propertyTwo: 2
// });
// Pass:
const commaStyle = () => ({
    propertyOne: 1,
    propertyTwo: 2
});
commaStyle();

// https://eslint.org/docs/rules/constructor-super
// Fail:
// class A {
//     constructor() {
//         this.firstName = 'Jane';
//         super();
//     }
// }
// new A();
// class B extends null {
//     constructor() {
//         this.firstName = 'Jane';
//         super();
//     }
// }
// new B();
// Pass:
class A {
    constructor() {
        this.firstName = 'Jane';
    }
}
class B extends A {
    constructor() {
        super();
        this.secondName = 'Doe';
    }
}
new B();

// https://eslint.org/docs/rules/curly
// Fail:
// const curly = n => {
//     if (n === 0)
//         ++n;
//     else
//         return n + 1;
// };
// Pass:
const curly = n => {
    if (n === 0) ++n;
    else {
        return n + 1;
    }
};
curly();

// https://eslint.org/docs/rules/dot-notation
// Fail:
// data['fooBar'] = 42;
// data['foo_bar'] = 42;
// Pass:
const data = { test: 1 };
const key = 'test';
data[key] = 2;
data.fooBar = 42;

// https://eslint.org/docs/rules/eqeqeq
// Fail:
// const value = 'test';
// value != 1;
// value == undefined;
// typeof foo == 'undefined';
// 'hello' != 'world';
// 0 == 0;
// true == true;
// value == null;
// Pass:
const value = 'test';
value !== 1;
value === undefined;
typeof foo === 'undefined';
'hello' !== 'world';
0 === 0;
true === true;
value === null;

// https://eslint.org/docs/rules/func-style
// Fail:
// const funcStyleExpression = function() {
//     return true;
// };
//Pass:
function funcStyleDeclaration() {
    return true;
}
funcStyleDeclaration();
const obj = {};
obj.funcStyleProperty = function() {
    return true;
};
const functionStyleArrow = () => true;
functionStyleArrow();

// https://eslint.org/docs/rules/guard-for-in
// Fail:
// const forInEx = {};
// const fn = v => v;
// for (const key in forInEx) {
//     fn(forInEx[key]);
// }
// Pass:
const forInEx = {};
const fn = v => v;
for (const key in forInEx) {
    if (Object.prototype.hasOwnProperty.call(forInEx, key)) {
        fn(forInEx[key]);
    }
}

// https://eslint.org/docs/rules/handle-callback-err
// Fail:
// function loadData (err, data) {
//     return data;
// }
// Pass:
function loadData (err, data) {
    if (err) return err;
    return data;
}
loadData(true, {});