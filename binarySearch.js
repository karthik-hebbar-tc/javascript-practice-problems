function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

const num = [4, 1, 6, 7, 8, 10];
const target = 8;

console.log(search(num, target));
