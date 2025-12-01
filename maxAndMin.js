let arr = [9, 2, 3, 4, 5, 1];

let max = arr[0];
let min = arr[0];

for (let num of arr) {
  if (num > max) {
    max = num;
  }
  if (num < min) {
    min = num;
  }
}

console.log("max = ", max);
console.log("min = ", min);
