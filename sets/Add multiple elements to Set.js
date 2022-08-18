// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set
function myFunction(set, arr) {
  arr.forEach((elem) => set.add(elem));
  return set;
}
