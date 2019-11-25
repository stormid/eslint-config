const arrowBodyStyle = (test) => test;
arrowBodyStyle();

const arrowParens = p => () => {
    return p * 2;
};
arrowParens();

const arrowSpacing = test=> ()=>test;
arrowSpacing();

const braceStyle = n => () => {
    if (n === 0) 
    {
        return n;
    }
    else {
        return n + 1;
    }
};
braceStyle();

const camel_case = () => ({
    property_one: 1,
    property_two: 2
});
camel_case();

const commaStyle = () => ({
    propertyOne: 1
    ,propertyTwo: 2
});
commaStyle();

class A {
    constructor() {
        this.firstName = 'Jane';
        super();
    }
}
new A();
class B extends null {
    constructor() {
        this.firstName = 'Jane';
        super(); 
    }
}
new B();


const curly = n => {
    if (n === 0)
        ++n;
    else 
        return n + 1;
};
curly();

//dot-notation
data['fooBar'] = 42;
data['foo_bar'] = 42;

//eqeqeq
const value = 'test';
value != 1;
value == undefined;
typeof foo == 'undefined';
'hello' != 'world';
0 == 0;
true == true;
value == null;

//func-style
const funcStyleExpression = function() {
    return true;
};
funcStyleExpression();

//guard-for-in
const forInEx = {};
const fn = v => v;
for (const key in forInEx) {
    fn(forInEx[key]);
}

// handle-callback-err
function loadData (err, data) {
    return data;
}
loadData(true, {});

// jsx-quotes
const Component = ({ b }) => <div>{b}</div>;
const sample = () => <Component b='c' />; // <-- single quotes
sample();

// key-spacing
const spacing = {
    "one":  1,
    "seven":7
}
const spacingTwo = { "one" :  1, "seven":7 }
const colon = {
    "one"   : 1,
    "seven" : 7
}
const minimum = {
    "one":   1,
    "seven": 7
}

// lines-around-comment
const myFn = () => true;
myFn();
/* Fail */

// new-cap
function person(name) {
    this.name = name;
    this.getName = () => this.name;
}
const Jane = new person('Jane');
Jane.getName();

// new-parens
function AnotherPerson(name = 'John') {
    this.name = name;   
    this.getName = () => this.name;
}
const John = new AnotherPerson;
John.getName();

//no-alert
alert("here!");
confirm("Are you sure?");
prompt("What's your name?", "John Doe");

// no-array-constructor
Array(0, 1, 2);
new Array(0, 1, 2);

// no-caller
function foo() {
    return arguments.callee;
}

// no-cond-assign
var x;
if (x = 0) {
    var b = 1;
}

// no-const-assign
const a = 0;
a = 1;
const b = 0;
b += 1;
const c = 0;
++c;

// no-delete-var
let x;
delete x;

// no-dupe-class-members
class A {
  b() { }
  b() { }
}
class B {
  c() { }
  get c() { }
}
class C {
  static d() { }
  static d() { }
}

// no-dupe-keys
const DupeA = {
    bar: "baz",
    bar: "qux"
};
const DupeB = {
    "bar": "baz",
    bar: "qux"
};
const DupeC = {
    0x1: "baz",
    1: "qux"
};

// no-duplicate-imports
import { merge } from 'module';
import { find } from 'module';

// no-else-return
function noElseReturn(x, y, z) {
    if (x) {
        return y;
    } else {
        return z;
    }
}

// no-empty-pattern
var {} = noEmpty1;
var [] = noEmpty2;
var {a: {}} = noEmpty3;
var {a: []} = noEmpty4;
function noEmpty5({}) {}
function noEmpty6([]) {}
function noEmpty7({a: {}}) {}
function noEmpty8({a: []}) {}

// no-empty
function noEmpty(value) {
    if (value) {
    }
    while (value) {
    }
    switch(value) {
    }
    try {
        doSomething();
    } catch(err) {
    } finally {
    }
}
noEmpty(true);

// no-lonely-if
function noLonelyIf(value) {
    if (value === 0) {
        return 'foo';
    } else {
        if (value === 1) {
            return 'bar';
        }
    }
    if (value % 2 === 0) {
        return 'baz';
    } else {
        if (typeof value === 'number') {
            return 'super';
        } else {
            return 'duper';
        }
    }
};

// https://eslint.org/docs/rules/no-multi-str
const multiStr = "Line 1 \
           Line 2";


// no-multiple-empty-lines
const noMultiple1 = test => () => test;



noMultiple1();


// no-new-wrappers
function noNewWrappers() {
    const stringObject = new String("Hello world");
    const numberObject = new Number(33);
    const booleanObject = new Boolean(false);
    return [stringObject, numberObject, booleanObject];
}
noNewWrappers();

// no-proto
const a = obj.__proto__;
const b = obj["__proto__"];
obj.__proto__ = b;
obj["__proto__"] = b;

// no-redeclare
let noRedeclare = () => true;
let noRedeclare = () = false;

// no-shadow-restricted-names
function NaN(){}
!function(Infinity){};
var undefined = 5;
try {} catch(eval){}

// no-spaced-func
const fn = () => true;
fn ();
fn
();

// no-this-before-super
class noThisB {}
class noThisA extends noThisB {
    constructor() {
        this.a = 0;
        super();
    }
}

// no-trailing-spaces
const noTrailingSpaces = () => true;  
noTrailingSpaces();   


// no-undef-init
var foo = undefined;
let bar = undefined;

// no-unneeded-ternary
function noUnneededTernary(x){
    const a = x === 2 ? true : false;
    return a;
}

// no-var
function noVar(x){
    var DOUBLE = 2;
    return x * DOUBLE;
}

// no-with
with (point) {
    r = Math.sqrt(x * x + y * y); // is r a member of point?
}