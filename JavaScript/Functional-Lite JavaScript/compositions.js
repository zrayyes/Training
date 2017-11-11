// Composition: Taking the output of one function and using it directly in another function.


function sum(x,y){
    return x + y;
}

function mult(x,y){
    return x * y;
}

function compose2(fn1,fn2){
    return function comp(){
        let args = [].slice.call(arguments);
        return fn2(
            fn1(args.shift(),args.shift()),
            args.shift()
        );
    }
}

let multAndSum = compose2(mult,sum);

multAndSum(3,4,5);     // 17