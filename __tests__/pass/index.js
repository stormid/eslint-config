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

// https://eslint.org/docs/rules/indent
// Fail: Anything other than 4 spaces

// https://eslint.org/docs/rules/jsx-quotes
// Fail:
// const Component = ({ b }) => <div>{b}</div>;
// const sample = () => <Component b='c' />; <-- single quotes
// sample();
// Pass:
const Component = ({ b }) => <div>{b}</div>;
const sample = () => <Component b="c" />;
const sampleTwo = () => <Component b={'c'} />;
sample();
sampleTwo();

// https://eslint.org/docs/rules/key-spacing
// Fail:
// const spacing = {
//     "one":  1,
//     "seven":7
// }
// const spacingTwo = { "one" :  1, "seven":7 }
// const colon = {
//     "one"   : 1,
//     "seven" : 7
// }
// const minimum = {
//     "one":   1,
//     "seven": 7
// }
// Pass:
const align = {
    one: 1,
    two: 2
};
const spacing = { one: 1, seven: 7 };
Object.assign({}, align, spacing);

// https://eslint.org/docs/rules/lines-around-comment
// Fail: no empty line before block comments
// const myFn = () => true;
// myFn();
// /* fail */
// Pass:
const myFn = () => true;
myFn();

/* Lines around comment pass */

// https://eslint.org/docs/rules/new-cap
// Fail:
// function person(name) {
//     this.name = name;
//     this.getName = () => this.name;
// }
// const Jane = new person('Jane');
// Jane.getName();
// Pass:
function Person(name) {
    this.name = name;
    this.getName = () => this.name;
}
const Jane = new Person('Jane');
Jane.getName();

// https://eslint.org/docs/rules/new-parens
// Fail:
// function AnotherPerson(name = 'John') {
//     this.name = name;
//     this.getName = () => this.name;
// }
// const John = new AnotherPerson;
// John.getName();
// Pass:
function AnotherPerson(name = 'John') {
    this.name = name;
    this.getName = () => this.name;
}
const John = new AnotherPerson('John');
John.getName();

// https://eslint.org/docs/rules/no-alert
// Fail:
// alert("here!");
// confirm("Are you sure?");
// prompt("What's your name?", "John Doe");

// https://eslint.org/docs/rules/no-array-constructor
// Fail:
// Array(0, 1, 2);
// new Array(0, 1, 2);
// Pass:
Array(10);
new Array(10);

// https://eslint.org/docs/rules/no-caller
// Fail
// function foo() {
//     return arguments.callee;
// }

// https://eslint.org/docs/rules/no-cond-assign
// Fail:
// var x;
// if (x = 0) {
//     var b = 1;
// }

// https://eslint.org/docs/rules/no-const-assign
// Fail:
// const a = 0;
// a = 1;
// const b = 0;
// b += 1;
// const c = 0;
// ++c;

// https://eslint.org/docs/rules/no-delete-var
// Fail:
// let x;
// delete x;

// https://eslint.org/docs/rules/no-dupe-class-members
// Fail:
// class A {
//   b() { }
//   b() { }
// }
// class B {
//   c() { }
//   get c() { }
// }
// class C {
//   static d() { }
//   static d() { }
// }

// https://eslint.org/docs/rules/no-dupe-keys
// Fail:
// const A = {
//     bar: "baz",
//     bar: "qux"
// };
// const B = {
//     "bar": "baz",
//     bar: "qux"
// };
// const C = {
//     0x1: "baz",
//     1: "qux"
// };

// https://eslint.org/docs/rules/no-duplicate-imports
// Fail:
// import { merge } from 'module';
// import { find } from 'module';
// Pass:
import { merge, find } from 'module';
merge();
find();

// https://eslint.org/docs/rules/no-else-return
// Fail:
// function noElseReturn(x, y, z) {
//     if (x) return y;
//     else return z;
// }
// Pass:
function noElseReturn(x, y, z) {
    if (x) return y;
    return z;
}
noElseReturn(true, 'success', 'fail');

// https://eslint.org/docs/rules/no-empty-pattern
// Fail:
// var {} = noEmpty1;
// var [] = noEmpty2;
// var {a: {}} = noEmpty3;
// var {a: []} = noEmpty4;
// function noEmpty5({}) {}
// function noEmpty6([]) {}
// function noEmpty7({a: {}}) {}
// function noEmpty8({a: []}) {}
// Pass:
const { noEmptyA = {} } = 'test';
const { noEmptyB = [] } = 'test';
function noEmpty1({ a = {} }) {};
function noEmpty2({ a = [] }) {};
noEmpty1(noEmptyA);
noEmpty2(noEmptyB);
let noEmpty3;
noEmpty3 = 'test';
noEmpty2(noEmpty3);