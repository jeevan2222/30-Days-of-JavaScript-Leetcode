var arr = [1, 2, 3, 4, 5];
var size = 2;
var Output = [[1], [2], [3], [4], [5]];
function chunk(arr, size) {
  const chunk = [];
  for (let i = 0; i < arr.length; i = i + size) {
    chunk.push(arr.slice(i, i + size));
  }
  return chunk;
}
console.log(chunk(arr, size));
