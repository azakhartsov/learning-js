const nums = [1, 2, 5, 3, 56, 34, 45, 56];
// let secondMax;
// let unique = [...new Set(nums)];
//
// unique.sort(function (a, b) {
//   return b - a;
// });
//
// secondMax = unique[1];
// console.log(secondMax);

let max = Math.max(...nums);

function defineMax(nums) {
  console.log("Max value in the array is: " + max);
  //loop to start from here
  while (max == defineMax(nums)) {
    let index = nums.indexOf(max);

    console.log("Index of the biggest value is: " + index);
    if (index > -1) {
      nums.splice(index, 1);
    }

    console.log("Array with removed biggest number looks like " + nums);

    newMax = Math.max(...nums);

    console.log("Second biggest number is: " + newMax);
  }
  return newMax;
}
defineMax(nums);
