// Write a function that takes a Date instance as argument
// It should return the next nearest quarter hour in minutes
// For example, if the given date has the time 10:01 the function should return 15
function myFunction(date) {
  let solvedMap = { 0: 15, 1: 30, 2: 45, 3: 60 };
  return solvedMap[Math.floor(date.getMinutes() / 15)];
}
