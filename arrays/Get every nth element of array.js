// Write a function that takes an array (a) and a value (n) as arguments
// Save every nth element in a new array
// Return the new array
function myFunction(a, n) {
  let step = -1;
  let result = [];
  while (step + n < a.length) {
    step += n;
    result.push(a[step]);
  }
  return result;
}
