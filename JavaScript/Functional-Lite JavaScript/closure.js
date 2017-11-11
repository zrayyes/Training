// closure is when a function remembers the variables around it even when that function is executed elsewhere.

function sumX(x){
    return function (y) {
        return x + y;
    }
}

let add10 = sumX(10);

add10(3);   // 13
add10(14);  // 24