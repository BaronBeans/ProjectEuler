// PROBLEM
// # Problem 1
// ## Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// SOLUTION
const solutionOne = (n: number) => {
  let result = [];
  for (let i = 1; i < n; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      result.push(i);
    }
  }
  return result.reduce((acc, cur) => acc + cur);
};

// TESTS
describe("Problem 1 - Multiples of 3 and 5", () => {
  const expectedResultForTestCase: number[] = [3, 5, 6, 9];

  it("passes test case", () => {
    const result = solutionOne(10);

    expect(result).toEqual(23);
  });

  it("gets correct answer", () => {
    const answer = solutionOne(1000);
    
    expect(answer).toEqual(233168);
  });
});
