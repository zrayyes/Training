function isOdd(v) { return v % 2 === 1;}

function exclude(arr,fn) {
    let list = [];
    for (let i = 0; i<arr.length; i++){
        if (fn(arr[i])) {
            list.push(arr[i]);
        }
    }
    return list;
}

exclude([1,2,3,4,5],isOdd);      // [ 1, 3, 5 ]

[1,2,3,4,5].filter(isOdd);       // [ 1, 3, 5 ]