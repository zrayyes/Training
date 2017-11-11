function* director(){
    yield "Three";
    yield "Two";
    yield "One";
}

const action = director();

setInterval(function(){
   let now = action.next();
   if(now.done) {
       clearInterval(this);
       console.log("ACTION!");
   } else {
       console.log(now.value);
   }
}, 1000);