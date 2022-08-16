// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max
function myFunction(min, max) {
  let temp = [];
  for (let i = min; i <= max; i++) {
    temp.push(i);
  }
  return temp;
}
