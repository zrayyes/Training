const waitTIme = 3000;
let currentTime = 0;
const waitInterval = 500;
let percentWaited = 0;

function writeWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
}

let interval = setInterval(function () {
    currentTime += waitInterval;
    percentWaited = Math.floor((currentTime/waitTIme) *100);
    writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function(){
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\n\nDone.");
}, waitTIme);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);