const cl = console.log;

// let numArray = [12, 34, 66, 74, 56, 49, 38];
let numArray = ['ram', 'shyam', 'harsh', 'rohit'];

 numArray[0] = numArray.splice(numArray.length-1, 1, numArray[0])[0];
cl(numArray)
