const { expect } = require("chai");
const substitution = require("../src/substitution").substitution;

describe("substitution()",()=>{
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "reeeeeeeeeee";
        const alphabet = "notGonnaWork";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
      it("should encode a message by using the given substitution alphabet", () => {
        const message = "message";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
      });
      it("should return false if there are any duplicate characters in the given alphabet.", () => {
        const message = "yeah";
        const alphabet = "creamcheeseconundrum";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
      it("should maintain spaces in the message, before and after encoding or decoding.", () => {
        const message = "my message";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "yp ysii.rs";
  
        expect(actual).to.equal(expected);
      });
      it("should ignore capital letters", () => {
        const message = "mESSaGe";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "ykrrpik";
      });
      
})
