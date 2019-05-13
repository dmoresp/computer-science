/* Basic Recursion example */
function basicRecursion(max, current) {
  if (current > max) return;
  console.log(current);
  basicRecursion(max, current+1);
}

basicRecursion(5, 1);

/* Fibonacci example */
function fibonacci(n) {
  if (n <= 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = -5; i <= 20; i++) {
  console.log(i, fibonacci(i));
}

/* Factorial example 
!5
5 * 4 * 3 * 2 * 1
n * (n-1) * (n-2) ... * 3 * 2 * 1
*/
function factorial(n) {
  if (n < 2) return 1;
  else
  return n * factorial(n - 1);
}

// Call the function factorial
// factorial(1) = 1
// factorial(2) = 2
// factorial(3) = 6

// unit test
describe('factorial', function() {
  it('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(10)).toEqual(3628800);
  });
});
