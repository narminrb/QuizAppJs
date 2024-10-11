function isEmpty(input) {
  if (Array.isArray(input)) {
      return input.length === 0; 
  } else if (typeof input === 'object' && input !== null) {
      return Object.keys(input).length === 0;
  }
  return false; 
}

// console.log(isEmpty({"x": 5, "y": 42})); 
// console.log(isEmpty({}));
// console.log(isEmpty([]));
// console.log(isEmpty([1, 2, 3])); 
