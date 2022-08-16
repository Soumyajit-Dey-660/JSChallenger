// Write a function that takes an array of objects as argument
// Sort the array by property b in ascending order
// Return the sorted array
function myFunction(arr) {
  return arr.sort((x, y) => {
    if (x['b'] > y['b']) return 1;
    if (x['b'] < y['b']) return -1;
    return 0;
  });
}
