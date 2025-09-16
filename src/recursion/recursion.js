/**
 * Calculate the factorial of a number using recursion
 * Factorial of n (n!) is the product of all positive integers less than or equal to n
 * For example: 5! = 5 × 4 × 3 × 2 × 1 = 120
 * @param {number} n - A non-negative integer
 * @return {number} The factorial of n
 */
export function factorial(n) {
  // Write your code here
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 0 ||
    typeof n === 'undefined' ||
    n == null ||
    !Number.isInteger(n)
  ) {
    throw new Error('Invalid input')
  }
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1) // for example 5 * 5 -1 which 5 * 4 etc..
}

/**
 * Calculate the nth Fibonacci number using recursion
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * Each number is the sum of the two preceding numbers
 * @param {number} n - A non-negative integer representing the position in the sequence
 * @return {number} The nth Fibonacci number
 */
export function fibonacci(n) {
  // Write your code here
  if (
    typeof n !== 'number' ||
    Number.isNaN(n) ||
    n < 0 ||
    typeof n === 'undefined' ||
    n == null ||
    !Number.isInteger(n)
  ) {
    throw new Error('Invalid input')
  }
  if (n == 0 || n === 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
/*
The fibonacci sequence
fibonacci(5)
 ├─ fibonacci(4)
 │   ├─ fibonacci(3)
 │   │   ├─ fibonacci(2) = 1
 │   │   └─ fibonacci(1) = 1
 │   │   → total = 2
 │   └─ fibonacci(2)
 │       ├─ fibonacci(1) = 1
 │       └─ fibonacci(0) = 0
 │       → total = 1
 │   → total = 3
 └─ fibonacci(3)
     ├─ fibonacci(2) = 1
     └─ fibonacci(1) = 1
     → total = 2
→ FINAL = 3 + 2 = 5

*/
