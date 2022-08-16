// Write a function that takes an array of strings as argument
// Return the longest string
function myFunction(arr) {
  let maxLength = 0;
  let answer;
  for (let word of arr) {
    if (word.length > maxLength) {
      maxLength = word.length;
      answer = word;
    }
  }
  return answer;
}
