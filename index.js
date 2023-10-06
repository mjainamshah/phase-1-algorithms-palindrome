function reverse(word) {
// `abc` => `cba`
const wordArray = word.split("")
const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join("")
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  // REVERSE THE INPUT STRING 
  const reversedWord = reverse(word)

  // IF THE INPUT IS THE SAME AS THE REVERESED INPUT
  if (word === reversedWord) {
  return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here

  THAT MEANS IF THE WORD IS THE SAME AS THE WORD IN REVERSE, IS SHOULD RETURN TRUE.
  REVERSE THE INPUT STRING

  IF THE INPUT IS THE SAME AS THE REVERSED INPUT
    RETURN TRUE
  ELSE
    RETURN FALSE
*/

/*
  Add written explanation of your solution here
  If there is a word when its alphabets are in reversed order are the same word as it were initially being reversed then it should return true, however if the words when reversed do not match once reversed then return false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("jainam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));
}

module.exports = isPalindrome;
