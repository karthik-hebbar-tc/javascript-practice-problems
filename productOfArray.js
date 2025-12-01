function productExceptSelf(num) {
  const left = new Array(num.length);
  const right = new Array(num.length);
  const ans = new Array(num.length);

  left[0] = 1;
  for (let i = 1; i < num.length; i++) {
    left[i] = left[i - 1] * num[i - 1];
  }

  right[num.length - 1] = 1;
  for (let i = num.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * num[i + 1];
  }

  for (let i = 0; i < num.length; i++) {
    ans[i] = left[i] * right[i];
  }

  return ans;
}

const num = [2, 3, 4, 3, 6];
console.log(productExceptSelf(num));
