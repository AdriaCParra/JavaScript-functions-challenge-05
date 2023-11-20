/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 *
 * @param {number} limit
 * @returns
 */
const generateRandomNumberInRange = (limit) => {
  return Math.floor(Math.random() * limit);
};

export default generateRandomNumberInRange;
