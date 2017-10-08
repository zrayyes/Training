function grab(flag){
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
}

var day = grab("--day");
var user = grab("--user");

if (!user || ! day){
    console.log("You ruined it");
} else{
    console.log(`Current User: ${user}, Current Day: ${day}`)
}
