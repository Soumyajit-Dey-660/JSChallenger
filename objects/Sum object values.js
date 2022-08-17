// Write a function that takes an object (a) as argument
// Return the sum of all object values
function myFunction(a) {
  return Object.values(a).reduce((acc, curr) => acc + curr, 0);
}
