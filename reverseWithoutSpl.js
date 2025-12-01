function isAlphaNumeric(char) {
  return /^[a-zA-Z0-9]$/.test(char);
}

function reversePreserve(str) {
  let ch = str.split("");
  let left = 0;
  let right = ch.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(ch[left])) {
      left++;
    } else if (!isAlphaNumeric(ch[right])) {
      right--;
    } else {
      let temp = ch[left];
      ch[left] = ch[right];
      ch[right] = temp;
      left++;
      right--;
    }
  }

  return ch.join("");
}


console.log(reversePreserve("ka@#$%thik"));
