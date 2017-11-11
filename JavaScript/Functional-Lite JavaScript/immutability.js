let x = 2;
x++;    // allowed

const y = 2;
y++;    // not allowed

const z = [1,2,3];
z = 4;  // not allowed
z[0] = 4;   // allowed

const w = Object.freeze([1,2,3]);
w = 4;  // not allowed
w[0] = 4;   // not allowed

// const is immutable binding, the value itself can still be changed
// Object.free makes the value itself immutable, making sure it can't be changed