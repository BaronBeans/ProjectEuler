// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


const sumOfSquares = () => {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result += i * i;
    }
    return result;
}

const squareOfSums = () => {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        result += i;
    }

    return result * result;
}

console.log(`${squareOfSums()} - ${sumOfSquares()} = ${squareOfSums() - sumOfSquares()}`)

// returns: 25164150
