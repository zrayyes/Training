const delay = seconds => {
    return new Promise((resolve,reject) => {
        if (typeof seconds !== "number") {
            reject(new Error('You suck'));
        }
        return setTimeout(() => {
            return resolve(`${seconds} second delay is up`);
        }, seconds * 1000);

    })
};

console.log("zero seconds");

delay('a').then(msg => msg.toUpperCase())
        .then(msg => `${msg}!!!!!!`)
        .then(msg => console.log(msg));

delay(3).then(msg => msg.toUpperCase())
    .then(msg => `${msg}!!!!!!`)
    .then(msg => console.log(msg));