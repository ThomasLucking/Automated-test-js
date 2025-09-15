import { randomInt } from 'crypto'

/**
 * @param {number} diameter
 * @return {number} sphere volume
 */
export function computeSphereVolume(diameter) {
  // Write your code here
  // if (typeof n !== 'number' || Number.isNaN(n)) {
  if (typeof diameter !== 'number' || Number.isNaN(diameter) || diameter < 0) {
    throw new TypeError('Invalid input')
  }else{
    const radius = diameter / 2
    return (4 / 3) * Math.PI * radius ** 3
  }
}

/**
 * @param {number} n
 * @return {number} number rounded to one decimal
 */
export function roundNumberToOneDecimals(n) {
  // Write your code here
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} average with full precision
 */
export function computeAverage(grades) {
  // Write your code here
}

/**
 * @param {number[]} grades An array containing all grades
 * @return {number} rounded average to 1 decimal
 */
export function roundedAverage(grades) {
  // Write your code here
}
