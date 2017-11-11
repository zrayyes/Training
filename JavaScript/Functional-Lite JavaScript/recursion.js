// ...args is an ES6 feature that returns
// all arguments of a function as an array

function sumRecur(...args) {
    if (args.length <= 2) {
        return args[0] + args[1];
    }
    return (
        args[0]+
        sumRecur(...args.slice(1))
    );
}

sumRecur(3,4,5,6,7,8,9);    // 42