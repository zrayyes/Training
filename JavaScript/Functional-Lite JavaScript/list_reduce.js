function mult(x,y) { return x * y;}

function compose(arr,fn,initial) {
    let total = initial;
    for (let i = 0; i < arr.length; i++) {
        total = fn(total, arr[i])
    }
    return total;
}

compose([1,2,3,4,5],mult,1);   // 120

[1,2,3,4,5].reduce(mult);  // 120