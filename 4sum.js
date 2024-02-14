function sum4(array, target) {
  let result = [];
  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      for (let k = j + 1; k < array.length - 1; k++) {
        for (let l = k + 1; l < array.length; l++) {
          if (array[i] + array[j] + array[k] + array[l] === target) {
            result.push([array[i], array[j], array[k], array[l]]);
          }
        }
      }
    }
  }

  return result;
}

let array = [2, 2, 2, 2, 2];
let target = 8;

console.log(sum4(array, target));
