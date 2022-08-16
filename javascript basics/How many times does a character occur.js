// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return [...b].reduce((acc, elem) => (elem === a ? ++acc : acc), 0);
}
