// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const isPrimeNumber = (n: number) => {
    if (n <= 3) {
        return n > 1;
    } else if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }

    let i = 5;
    while (i * i <= n) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false
        }
        i = i + 6;
    }

    return true;
}

const resultHasBeenFound = (data: number[], target: number) => {
    if (data.length < 2) {
        return false;
    }

    let result = 1;
    data.forEach(i => {
        result *= i;
    });

    if (result == target) {
        return true;
    }

    return false;
}

const getLargestPrimeFactor = (n: number) => {
    let result = [];
    for (let i = 1; i < n; i++) {
        if (isPrimeNumber(i)) {
            if (n % i == 0) {
                result.push(i);
                if (resultHasBeenFound(result, n)) {
                    return result[result.length - 1];
                }
            }
        }
    }
}

console.log(getLargestPrimeFactor(600851475143));

// returns: 6857
