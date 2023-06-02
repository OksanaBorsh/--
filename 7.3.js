function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
// [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2], ["a", "b"], 1));
// ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2, 3, 4], [], 0));
// [1, 2, 3, 4]
