const arrowBodyStyle = n => n + 1;
arrowBodyStyle();

const arrowParens = test => () => test;
arrowParens();

const arrowSpacing = test => () => test;
arrowSpacing();

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

const camelCase = () => ({
    propertyOne: 1,
    propertyTwo: 2
});
camelCase();

const commaStyle = () => ({
    propertyOne: 1,
    propertyTwo: 2
});
commaStyle();

class A {
    constructor() {
        this.firstName = 'Jane';
    }
}

class ConstructorSuper extends A {
    constructor() {
        super();
        this.secondName = 'Doe';
    }
}
new ConstructorSuper();

const curly = n => {
    if (n === 0) ++n;
    else {
        return n + 1;
    }
};
curly();

//dot-notation
const data = { test: 1 };
const key = 'test';
data[key] = 2;
data.fooBar = 42;

//eqeqeq
const value = 'test';
value !== 1;
value === undefined;
typeof foo === 'undefined';
'hello' !== 'world';
0 === 0;
true === true;
value === null;