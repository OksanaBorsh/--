function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    return arr.indexOf(num);
  }
  
  console.log(getIndexToIns([40, 60], 50));
  // 1
  
  console.log(getIndexToIns([1, 2, 3, 4], 1.5));
  // 1
  
  console.log(getIndexToIns([20, 3, 5], 19));
  // 2
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
  // 3
  
  console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
  // 2
  
  console.log(getIndexToIns([3, 10, 5], 3));
  // 0
  
  console.log(getIndexToIns([5, 3, 20, 3], 5));
  // 2
  