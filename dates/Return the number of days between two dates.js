// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
  return Math.abs((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24));
}
