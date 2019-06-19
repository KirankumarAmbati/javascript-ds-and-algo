const { performance } = require('perf_hooks');

// Linear Search Implementation
const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Testing and Performance Analysis
let arr = [];

for(let x=0; x<1000; x++) {
    arr[x] = x;
}

let t0 = performance.now();
let index = linearSearch(arr, 999)
let t1 = performance.now();

let timeTaken = t1-t0;

console.log('Found at [index]: ', index, '. Time taken: ', timeTaken, 'ms.');