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
