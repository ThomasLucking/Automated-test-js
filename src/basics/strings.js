/**
 * Find and replace in the provided string, but preserving case
 * If the new word is longer than the replaced one, ignore tail characters
 * @param {string} needle
 * @param {string} haystack
 * @param {string} newWord
 * @return {string} the resulting string, with all needle words transformed to newWord
 */
export function findAndReplacePreservingCase(needle, haystack, newWord) {
  // Write your code here
  if (
    typeof needle !== 'string' ||
    typeof haystack !== 'string' ||
    typeof newWord !== 'string'
  ) {
    throw new TypeError('Invalid input')
  }
  const regex = new RegExp(needle, 'gi') // creates a new regex with need and the global and case-insensitive 
  // this processes each match found in the regex.
  return haystack.replaceAll(regex, (match) => {
    let answer = '' // a variable to store the result
    for (let i = 0; i < match.length && i < newWord.length; i++) { // this loops over the letters of match and newWord
      answer += // this adds newword to the answer and it checks if the match regex is uppercase or lowercase
        match[i] === match[i].toUpperCase()
          ? newWord[i].toUpperCase() // if the matched letter is uppercase, use uppcase for newWord
          : newWord[i].toLowerCase() // vise versa
    } 
    return answer // return the processed replacement.
  })
}
