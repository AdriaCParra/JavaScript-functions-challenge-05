/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 *
 * @param {string} sentence
 * @returns
 */
const getTotalWordsFromString = (sentence) => {
  return sentence.split(" ").length;
};

export default getTotalWordsFromString;
