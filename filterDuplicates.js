//Remove Duplicate Letters
let r = "KK AA KK AA art";
let r2 = r.toLowerCase();

let resultChar = "";
let seenChars = new Set();

for (let ch of r2) {
  if (ch !== " " && !seenChars.has(ch)) {
    seenChars.add(ch);
    resultChar += ch;
  }
}

console.log(resultChar);

//Remove Duplicate words
let resultWord = "";
let words = r.toLowerCase().split(" ");
let seenWords = new Set();

for (let w of words) {
  if (!seenWords.has(w)) {
    seenWords.add(w);
    resultWord += w + " ";
  }
}

console.log(resultWord.trim());
