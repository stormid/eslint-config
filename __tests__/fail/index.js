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