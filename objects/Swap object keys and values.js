// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object
function myFunction(obj) {
  return Object.keys(obj).reduce((res, curr) => {
    return { ...res, [obj[curr]]: curr };
  }, {});
}
