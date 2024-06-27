// Whale talk
// var input = 'i like coding and surfing';
var input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for (let i = 0; i < input.length; i++) {
  const letter = input[i];
  // console.log(i, letter);

  if (letter === 'e') {
    resultArray.push(input[i]);
  }
  
  if (letter === 'u') {
    resultArray.push(input[i]);
  }

  for (let j = 0; j < vowels.length; j++) {
    const vowel = vowels[j];
    // console.log(j);

    if (letter.toLowerCase() === vowel.toLowerCase()) {
      resultArray.push(letter);
    }
  }
  
}
console.log(resultArray);

const resultString = resultArray.join('').toUpperCase();

console.log(resultString);

