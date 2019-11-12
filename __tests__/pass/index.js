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