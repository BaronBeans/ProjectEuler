
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var isPrime = (n: number) => {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

const getPrimesLessThanN = (n: number) => {
    let arr = [2];
    let i = 3;
    while (i <= n) {
        if (isPrime(i)) {
            arr.push(i);
        }
        i += 2;
    }
    return arr;
}

const primes = getPrimesLessThanN(2000000);

const sumOfPrimes = (primes: number[]) => primes.reduce((a, b) => a + b, 0);

console.log(sumOfPrimes(primes));

// returns: 142913828922