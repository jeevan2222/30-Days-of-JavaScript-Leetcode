function countCommonElements(a, b) {
  const setA = new Set(a);
  const setB = new Set(b);

  let commonCount = 0;
  console.log(setA, typeof setA);
  for (const char of setA) {
    if (setB.has(char)) {
      commonCount++;
    }
  }

  return commonCount;
}

const a = "abcdefd";
const b = "aemkd";

const result = countCommonElements(a, b);
console.log(result); // Output: 2
