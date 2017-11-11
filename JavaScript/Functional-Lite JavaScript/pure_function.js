// Wrapping an impure function in a pure function removes any (top level) side effects.

function bar(x,y,z) {
    foo(x);
    return [y,z];

    function foo(x){
        y = y * x;
        z = z * x;
    }
}

bar(5,2,3); // [10,15]
bar(5,10,15); // [50,75]