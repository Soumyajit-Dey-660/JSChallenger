// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object
function myFunction(obj) {
  return Object.keys(obj).reduce(
    (res, curr) =>
      obj[curr].trim() === ''
        ? { ...res, [curr]: null }
        : { ...res, [curr]: obj[curr] },
    {}
  );
}
