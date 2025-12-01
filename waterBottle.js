function numWaterBottles(numBottles, numExchange) {
  let ans = numBottles;

  while (numBottles >= numExchange) {
    let newBottles = Math.floor(numBottles / numExchange);
    let remainingBottle = numBottles % numExchange;

    ans += newBottles;
    numBottles = newBottles + remainingBottle;
  }

  return ans;
}

const result = numWaterBottles(15, 4);
console.log(result);
