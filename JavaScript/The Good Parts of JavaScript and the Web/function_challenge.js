function add(x,y) {
    return x + y;
}

function sub(x,y) {
    return x - y;
}

function mul(x,y){
    return x * y;
}

const log = console.log;

// Write a function identityf that takes an argument and returns
// a function that returns that argument.

function identityf(n){
    return function(){
        return n;
    };
}

let three = identityf(3);
log(three());   // 3


// Write a function addf that adds from two invocations
// addf(3)(4) //7

function addf(x) {
    return function (y) {
        return add(x,y);
    }
}

log(addf(3)(4)); // 7


// Write a function liftf that takes a binary function,
// and makes it callable with two invocations
// liftf(mul)(5)(6)  = 30

function liftf(fn) {
    return function(x){
        return function(y){
            return fn(x,y);
        };
    };
}

log(liftf(mul)(5)(6));  // 30


// Write a function curry that takes a binary function and an argument,
// and returns a function that can take a second argument
// var add3 = curry(add,3);
// add3(4) = 7

function curry(fn, x) {
    return function(y){
        return fn(x,y);
    };
}

let add3 = curry(add,3);
log(add3(4));