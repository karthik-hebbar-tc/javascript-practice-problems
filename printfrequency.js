function countOccurrences() {
  let S = "KKar th rh I I k";

  // Word Count
  let words = S.toLowerCase().split(" ");

  let wordCount = {};

  for (let word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }

  console.log("Word Count:");
  for (let key in wordCount) {
    console.log(key + ":" + wordCount[key]);
  }

  // Letter Count
  let letterCount = {};

  for (let ch of S) {
    if (ch !== " ") {
      letterCount[ch] = (letterCount[ch] || 0) + 1;
    }
  }

  console.log("Letter Count:");
  for (let key in letterCount) {
    console.log(key + ":" + letterCount[key]);
  }
}

countOccurrences();
