// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
  let hrs = Math.floor(
    Math.abs((a.getTime() - b.getTime()) / (1000 * 60 * 60)) % 24
  );
  let min = Math.floor(
    Math.abs((a.getTime() - b.getTime()) / (1000 * 60)) % 60
  );
  let sec = Math.floor(Math.abs((a.getTime() - b.getTime()) / 1000) % 60);
  return { hrs, min, sec };
}
