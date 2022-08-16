// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a) {
  function isPrime(x) {
    let primeFlag = true;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        primeFlag = false;
        break;
      }
    }
    return primeFlag;
  }
  let answer = a;
  while (true) {
    if (isPrime(answer)) {
      return answer;
    }
    answer++;
  }
}
