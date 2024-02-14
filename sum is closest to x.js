function closeX(array, target) {
  let closeValue = Number.MAX_SAFE_INTEGER;
  let result = [];
  console.log(closeValue);

  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    let currentSum = array[i] + array[j];
    let currentDiff = Math.abs(target - currentSum);

    if (currentDiff < closeValue) {
      closeValue = currentDiff;
      result = [i, j];
    }

    if (currentSum === target) {
      return result;
    } else if (currentSum > target) {
      j--;
    } else {
      i++;
    }
  }

  return result;
}

let array = [10, 22, 30];
let x = 54;

console.log(closeX(array, x));
