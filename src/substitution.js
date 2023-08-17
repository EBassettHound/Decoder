// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet = "", encode = true) {
    if (alphabet.length !== 26 || new Set(alphabet).size !== alphabet.length || alphabet.length === 0 )return false;
    const translator = {}
    const result = []
    if (!encode){
      for (let i =0; i< realAlphabet.length; i++){
        translator[alphabet[i]] = realAlphabet[i];
      }
      for (let i=0; i < input.length; i++) {
        if (input[i] === " "){
          result.push(input[i]);
          i++
        }
        result.push(translator[input[i]]);  
      }
    }
    else {
      for (let i =0; i< realAlphabet.length; i++){
        translator[realAlphabet[i]] = alphabet[i];
      }
      for (let i=0; i < input.length; i++) {
        if (input[i] === " "){
          result.push(input[i]);
          i++
        }
        result.push(translator[input[i]]);  
      }
    }
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
