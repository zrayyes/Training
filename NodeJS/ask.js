const questions = [
 "What is your name?",
 "What is your favourite color?",
 "What is your favourite programming language?"
];

let answers = [];

function ask(i){
process.stdout.write(`\n\n${questions[i]}`);
process.stdout.write("  >  ");
}

process.stdin.on('data', function(data){
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else process.exit();
});

process.on('exit', function () {
    process.stdout.write(`\n${answers[0]} likes ${answers[1]} ${answers[2]}.\n`);
});


ask(0);