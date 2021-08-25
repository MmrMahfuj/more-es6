const numbers = [2, 4, 8];
const output2 = [];

// function doubleIt(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number)
    output2.push(result);
}

// const output = [];

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);


console.log(output);