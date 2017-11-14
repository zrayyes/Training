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
log(three());