// function sortBy(arr, fn) {
//   return arr.sort((a, b) => fn(a) - fn(b));
// }
function sortBy(arr, fn) {
  let n = arr.length;
  

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (fn(arr[j]) > fn(arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  
  return arr;
}

