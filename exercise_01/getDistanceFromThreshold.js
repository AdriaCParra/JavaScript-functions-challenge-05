/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 *
 * @param {number} value
 * @param {number} threshold
 * @returns {number}
 */
const getDistanceFromThreshold = (value, threshold) => {
  return value - threshold;
};

export default getDistanceFromThreshold;
