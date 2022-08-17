// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in
function myFunction(obj) {
  let { fn, ln, ...rest } = obj;
  let result = {};
  if (obj['size'] !== undefined) result['size'] = `${obj['size']}cm`;
  if (obj['weight'] !== undefined) result['weight'] = `${obj['weight']}kg`;
  return { fn, ln, ...result };
}
