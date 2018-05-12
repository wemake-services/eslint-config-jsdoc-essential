/* eslint-disable no-unused-vars */

/**
 * Imaginary function to take same slices from imaginary pizza.
 * This function is created, because we love pizza.
 *
 * @param pizza - {Array} List of slices.
 * @param numberOfSlices - Number of slices to take away.
 * @returns {Array} What is left of our pizza.
 */
function takeSlices (pizza, numberOfSlices) {
  return pizza.splice(0, numberOfSlices)
}
