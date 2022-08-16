// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let step = 0;
  let answer = '';
  for (let i = a.length - 1; i >= 0; i--) {
    step++;
    if (step === 3) {
      step = 0;
      answer += a[i] + b;
    } else {
      answer += a[i];
    }
  }
  return [...answer].reverse().join('');
}
