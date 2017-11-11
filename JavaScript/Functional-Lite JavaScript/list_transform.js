function doubleIt(v) { return v * 2;}

function transform(arr,fn) {
    let list = [];
    for (let i = 0; i<arr.length; i++){
        list[i] = fn(arr[i]);
    }
    return list;
}

transform([1,2,3,4,5],doubleIt);    // [2,4,6,8,10]

// the non functional method
[1,2,3,4,5].map(doubleIt);          // [2,4,6,8,10]