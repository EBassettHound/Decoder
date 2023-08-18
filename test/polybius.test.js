const { expect } = require("chai");
const polybius = require("../src/polybius").polybius;

describe("polybius()",()=>{
    it("When encoding, it translates the letters i and j to 42",()=>{
        const message = "jiggle";
        const expected = "424222221351";
        const actual = polybius(message)
        expect(actual).to.equal(expected)
    })
    it("When decoding, it translates 42 to (i/j)",()=>{
        const message = "42";
        const expected = "ji";
        const actual = polybius(message,false)
        expect(actual).to.equal(expected)
    })
    it("Should ignore capital letters",()=>{
        const message = "AaABbB";
        const expected = "111111212121";
        const actual = polybius(message)
        expect(actual).to.equal(expected)
    })
    it("Should maintain spaces in the message, before and after encoding or decoding.",()=>{
        const message = "ji ggle";
        const expected = "4242 22221351";
        const actual = polybius(message)
        expect(actual).to.equal(expected)
    })
    
})