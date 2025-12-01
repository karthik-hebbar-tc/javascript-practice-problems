function twoSum(nums, target) {
  let ans = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        ans[0] = i;
        ans[1] = j;
        break;
      }
    }
  }
  return ans;
}

const nums = [2, 4, 6, 8, 1, 5];
const result = twoSum(nums, 6);

console.log(result);
console.log(nums[result[1]]);
