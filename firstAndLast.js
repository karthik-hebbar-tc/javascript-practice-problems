let FL = "Karthil";

if (FL.length <= 1) {
  console.log("output " + FL);
} else {
  let lastChar = FL[FL.length - 1];
  let firstChar = FL[0];
  let middleWord = FL.slice(1, -1);

  let result = lastChar + middleWord + firstChar;
  console.log(result);
}
