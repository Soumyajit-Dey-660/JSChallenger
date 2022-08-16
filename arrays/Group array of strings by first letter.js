// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}
function myFunction(arr) {
  let answerMap = {};
  for (let word of arr) {
    if (answerMap[word[0].toLowerCase()] !== undefined) {
      answerMap[word[0].toLowerCase()].push(word);
    } else {
      answerMap[word[0].toLowerCase()] = [word];
    }
  }
  return answerMap;
}
