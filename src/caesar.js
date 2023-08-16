// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {

    if (!shift || shift < -25 || shift > 25 || shift === 0) {
      return false;
    }

    let result = "";

    for (let i=0; i < input.length; i++ ) {

      const letter = input[i].toLowerCase();
      
      if (!alphabet.includes(letter)){
        result += letter
      }

      else {
      const alphaNum = alphabet.indexOf(letter);
      
      if (encode) {

        const shiftedNum = (alphaNum + shift%26)%26
        if (shiftedNum >= 0) {
          const newLetter = alphabet[shiftedNum];
          result += newLetter;
        }
        else {
          const newLetter = alphabet[26+shiftedNum];
          result += newLetter;
        }
       
      }
      else {
        const shiftedNum = (alphaNum - shift%26)%26;
        if (shiftedNum >= 0){
          const newLetter = alphabet[shiftedNum];
          result += newLetter;
        }
        else {
          const newLetter = alphabet[26+shiftedNum];
          result += newLetter;

        }
      }
      
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
