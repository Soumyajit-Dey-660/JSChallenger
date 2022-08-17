// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
function myFunction(a, b) {
  return (a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24) === 0;
}
