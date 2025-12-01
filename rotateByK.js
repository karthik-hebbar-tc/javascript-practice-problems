function rotate(nums, k) {
  const n = nums.length;
  k = k % n;

  reverse(nums, 0, n - 1);

  reverse(nums, 0, k - 1);

  reverse(nums, k, n - 1);
}

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}

let arr = [1, 2, 3, 4, 5];
rotate(arr, 10);

console.log(arr);
