const { expect } = require("chai");
const caesar = require("../src/caesar").caesar

describe("caesar()",()=>{
    it("It returns false if the shift value is equal to 0.",()=> {
        const message = "da beef and cheese fo today";
        const shift = 0;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    it("It returns false if the shift value is greater than 25.",()=> {
        const message = "where is my corn";
        const shift = 23423;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    it("It returns false if the shift value is less than -25.",()=> {
        const message = "i have stolen the corn";
        const shift = -23423;
        const actual = caesar(message,shift)
        expect(actual).to.be.false;
    })
    it("It returns false if the shift value is not present.",()=> {
        const message = "return the slab";
        const actual = caesar(message)
        expect(actual).to.be.false;
    })
    it("It ignores capital letters.",()=> {
        const message = "giVe mE bAcK mY coRn";
        const shift = 3;
        const actual = caesar(message,shift)
        const expected = "jlyh ph edfn pb fruq"
        expect(actual).to.equal(expected);
    })
    it("When encoding, it handles shifts that go past the end of the alphabet.",()=> {
        const message = "zzzzzz";
        const shift = 3;
        const actual = caesar(message,shift)
        const expected = "cccccc"
        expect(actual).to.equal(expected);
    })
    it("It maintains spaces and other nonalphabetic symbols in the message.", () => {
        const message = "a lot of corn.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d orw ri fruq.";
  
        expect(actual).to.equal(expected);
      });
    

    
    
})
