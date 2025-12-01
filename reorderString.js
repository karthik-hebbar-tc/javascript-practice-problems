function reorderString(str) {
  let vowels = "";
  let specials = "";
  let consonants = "";

  for (let ch of str) {
    if (/[aeiouAEIOU]/.test(ch)) {
      vowels += ch;
    } else if (!/[a-zA-Z]/.test(ch)) {
      specials += ch;
    } else {
      consonants += ch;
    }
  }

  return vowels + specials + consonants;
}

console.log(reorderString("Kk@#art!"));
