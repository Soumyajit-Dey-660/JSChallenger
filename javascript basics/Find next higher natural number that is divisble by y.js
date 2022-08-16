// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y
function myFunction(x, y) {
  let logic;
  if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    logic = x + y - (x % y);
  } else {
    logic = x - (x % y);
  }
  return x % y === 0 ? x : logic;
}
