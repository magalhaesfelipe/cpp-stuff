function searchThis(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = Array.from({ length: 1000 }, (_, i) => i + 1);

const start = process.hrtime.bigint();

const binarySearchResult = searchThis(arr, 200);

const end = process.hrtime.bigint();
const durationNs = end - start;

console.log("BinarySearchResult:", binarySearchResult);
console.log("Time (ns):", durationNs.toString());
