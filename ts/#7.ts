// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

const isPrime = (n: number) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const getPrimes = (n: number) => {
    let arr = [2];
    let i = 3;
    while (arr.length < n) {
        if(isPrime(i)) {
            arr.push(i);
        }
        i += 2;
    }
    return arr;
}

const listOfPrimes = getPrimes(10001);

console.log(listOfPrimes[10000]);

// returns: 104743
