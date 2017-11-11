// Turn mult into a recursive function
// that can work with as many arguments
// as necessary.

function recursiveMult(...args){
    if(args.length <= 2){
        return args[0] * args[1];
    }

    return(
        args[0] * recursiveMult(...args.slice(1))
    );
}

recursiveMult(1,2,3,5);     // 30