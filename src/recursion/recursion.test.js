import { describe, expect, it, test } from 'vitest'
import { factorial, fibonacci } from './recursion.js'

describe('Factorial function:', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => factorial('hello')).toThrowError()
    expect(() => factorial(Number.NaN)).toThrowError()
    expect(() => factorial(-5)).toThrowError()
    expect(() => factorial(3.5)).toThrowError()
    expect(() => factorial(null)).toThrowError()
    expect(() => factorial(undefined)).toThrowError()
  })

  test('Calculate factorial for valid inputs', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
    expect(factorial(6)).toBe(720)
    expect(factorial(7)).toBe(5040)
  })

  test('Calculate factorial for larger numbers', () => {
    expect(factorial(8)).toBe(40320)
    expect(factorial(9)).toBe(362880)
    expect(factorial(10)).toBe(3628800)
  })
})

describe('Fibonacci function:', () => {
  it('Should return an exception with unsupported types', () => {
    expect(() => fibonacci('hello')).toThrowError()
    expect(() => fibonacci(Number.NaN)).toThrowError()
    expect(() => fibonacci(-1)).toThrowError()
    expect(() => fibonacci(2.5)).toThrowError()
    expect(() => fibonacci(null)).toThrowError()
    expect(() => fibonacci(undefined)).toThrowError()
  })

  test('Calculate Fibonacci numbers for base cases', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
  })

  test('Calculate Fibonacci numbers for small values', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(6)).toBe(8)
    expect(fibonacci(7)).toBe(13)
    expect(fibonacci(8)).toBe(21)
  })

  test('Calculate Fibonacci numbers for larger values', () => {
    expect(fibonacci(9)).toBe(34)
    expect(fibonacci(10)).toBe(55)
    expect(fibonacci(11)).toBe(89)
    expect(fibonacci(12)).toBe(144)
    expect(fibonacci(15)).toBe(610)
  })
})