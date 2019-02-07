// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isDivisableByAllNumbers = (n: number) => {
    let pass = true;
    for (let i = 1; i <= 20; i++) {
        if (n % i != 0) {
            pass = false;
            return pass;
        }
    }

    return pass;
}

const checkNumbers = (lower: number, upper: number) => {
    for (let i = lower; i <= upper; i++) {
        if (isDivisableByAllNumbers(i)) {
            return i;
        }
    }
}

console.log(checkNumbers(1, 1000000000));

// returns: 232792560
