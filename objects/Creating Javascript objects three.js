// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object
function myFunction(a, b) {
  let answer = {};
  for (let i = 0; i < a.length; i++) {
    answer[a[i]] = b[i];
  }
  return answer;
}
