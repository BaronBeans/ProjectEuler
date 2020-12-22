// PROBLEM
// # Problem 2
// ## Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// SOLUTION
const getFibNumbers = (limit: number): number[] => {
  let fibs = [1, 2];

  while (fibs[fibs.length - 1] < limit) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }

  return fibs;
};

const filterEven = (arr: number[]) => arr.filter((fib) => fib % 2 === 0);

const sumOf = (arr: number[]) => arr.reduce((acc, x) => acc + x, 0);

const solutionTwo = (limit: number): number => {
  return sumOf(filterEven(getFibNumbers(limit)));
};

// TESTS
describe("Problem 2 - Even Fibonacci numbers", () => {
  it(`passes test case (cheated here slightly instead of creating 2 functions, 
    the example gets starts with a length and the answer requires any length so 
    long as the numbers don't exeed the limit)`, () => {
    const expected = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const result = getFibNumbers(80);

    expect(result).toEqual(expected);
  });

  it("returns only true values", () => {
    const checkEven = (arr: number[]) =>
      arr.reduce((prev, cur) => prev && cur % 2 === 0, true);
    const expected = [2, 8, 34];
    const result = filterEven(getFibNumbers(80));

    expect(checkEven(result)).toBe(true);
    expect(result).toStrictEqual(expected);
  });

  it("can add all the even ones", () => {
    const result = sumOf(filterEven(getFibNumbers(80)));

    expect(result).toBe(2 + 8 + 34);
  });

  it("gets correct answer", () => {
    const answer = solutionTwo(4000000);

    expect(answer).toEqual(4613732);
  });
});