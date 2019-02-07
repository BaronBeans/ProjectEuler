// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindromic = (n: number) => {
    const array = ("" + n).split("");
    let newArray = [];

    for (let i = 1; i <= array.length; i++) {
        newArray.push(array[array.length - i]);
    }

    const convertToNumbers = (input: string[]) => {
        let result = "";

        input.forEach(i => {
            result += i.toString();
        });

        return result;
    }

    const string1 = convertToNumbers(array);
    const string2 = convertToNumbers(newArray);

    const compareTwoNums = (a: string, b: string) => {
        if (a === b) {
            return true;
        }

        return false;
    }

    if (compareTwoNums(string1, string2)) {
        return true;
    }

    return false;
}


// isPalindromic(100); //false
// isPalindromic(101); //true
// isPalindromic(9876); //false
// isPalindromic(9889); //true


// // lower: 10^2
// const lowerBound = 10 * 10;

// // upper: 99^2
// const upperBound = 99 * 99;

// for (let i = lowerBound; i <= upperBound; i++) {
//     if (isPalindromic(i)) {
//         console.log(i);
//     }
// }

const getFactors = (num: number) => {
    var half = Math.floor(num / 2), // Ensures a whole number <= num.
        str = '1', // 1 will be a part of every solution.
        i, j;

    // Determine out increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
        num % i === 0 ? str += ',' + i : false;
    }

    str += ',' + num; // Always include the original number.
    // return str;

    let result = str.split(",").filter(s => s.split("").length == 3);
    if (result.length > 1) {
        return str;
    }
}

const dataToCheck = [
    9009,
    9119,
    9229,
    9339,
    9449,
    9559,
    9669,
    9779
]

const checkData = (i: number, j: number) => {
    if (i % j == 0) {
        return true;
    }
    return false;
}

// dataToCheck.forEach(i => {
//     for (let j = 90; j < 100; j++) {
//         if (checkData(i, j)) {
//             console.log(i);
//         }
//     }
// });

dataToCheck.forEach(i => {
    console.log(`Factors of: ${i} are: ${getFactors(i)}`)
});
