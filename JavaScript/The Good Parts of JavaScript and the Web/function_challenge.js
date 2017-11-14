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


// Without writing any new functions, show three ways to create the inc function
// inc(5)  = 6
// inc(inc(5)) = 7

// Way 1
let inc1 = addf(1);

// Way 2
let inc2 = liftf(add)(1);

// Way 3
let inc3 = curry(add,1);

log(inc1(5));   // 6
log(inc2(5));   // 6
log(inc3(5));   // 6


// Write a function 'twice', that takes a binary function and returns
// a unary function that passes its argument to the binary function 'twice'.
// var double = twice(add);
// double(11) = 22;

function twice(fn) {
    return function (x) {
        return fn(x,x);
    }
}

let doubl = twice(add);
let square = twice(mul);

log(doubl(5));     // 10
log(square(5));     // 25


// Write reverse, a function that reverses the arguments of a binary function.
// var bus = reverse(sub)
// bus(3,2) = -1

function reverse(fn){
    return function(x,y){
        return fn(y,x);
    }
}

log(reverse(sub)(3,2));     // -1


// Write a function 'composeu' that takes two unary functions and returns a unary function that calls them both.
// composeu(doubl, square)(5) = 100

function composeu(fn1, fn2){
    return function(x){
        return fn2(fn1(x));
    };
}

log(composeu(doubl, square)(5));    // 100


// Write a function 'composeb' that takes two binary functions and returns a function that calls them both.
// composeb(add, mul)(2,3,7) = 35

function composeb(fn1,fn2) {
    return function (x,y,z){
        return fn2(fn1(x,y),z);
    };
}

log(composeb(add, mul)(2,3,7));     // 35


// Write a limit function that allows a binary function to be called a limited number of times.
// var add_ltd = limit(add,1);

function limit(fn1,n){
    let counter = 0;
    return function (x,y) {
        if (counter >= n){
            return undefined;
        } else {
            counter += 1;
            return fn1(x,y);
        }
    };
}

let add_ltd = limit(add,1);
let sub_ltd = limit(sub,2);

log(add_ltd(3,4));  // 7
log(add_ltd(3,4));  // undefined
log(sub_ltd(5,4));  // 1
log(sub_ltd(5,4));  // 1
log(sub_ltd(5,4));  // undefined


// Write a from function that produces a generator that will produce a series of values.

function from(n){
    return function () {
        let count = n;
        n += 1;
        return count;
    };
}

let index = from(0);
log(index());
log(index());
log(index());


// Write a to function that takes a generator and an end value,
// and returns a generator that will produce numbers up to that limit.
// var index = to(from(1), 3);

function to(start, end){
    let count = 1;
    return function () {
        if (count >= end){
            return undefined;
        } else {
            count += 1;
            return start();
        }
    }
}

let index2 = to(from(1), 3);

log(index2());  // 1
log(index2());  // 2
log(index2());  // undefined