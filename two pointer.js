//brute force
// function twoPointer(array, target) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return 0;
// }
// array = [12, 34, 56, 77, 88, 99];
// target = 100;

// console.log(twoPointer(array, target));
//optimum solution

function optimum(array, target) {
  i = 0;
  j = array.length - 1;
  while (i <= j) {
    if (array[i] + array[j] == target) {
      return [i, j];
    } else if (array[i] + array[j] > target) {
      j--;
    } else if (array[i] + array[j] < target) {
      i++;
    }
  }
  return [];
}

array = [12, 34, 56, 77, 88, 99];
target = 100;

console.log(optimum(array, target));
