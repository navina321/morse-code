const { morseObject } = require("./morseData")

describe('englishToMorse', () => { 
    it("should return '.-' when given a string 'a'", ()=> {
        const translatedString = englishToMorse("a")
        expect(translatedString).toBe(".-")
    })

    it("should return '.-' when given a string 'A'", ()=> {
        const translatedString = englishToMorse("A")
        expect(translatedString).toBe(".-")
    })

    it("should return the same string, when given the string 'a' or 'A'", () => {
        const translatedString = englishToMorse("a")
        const translatedStringCap = englishToMorse("A")
        expect(translatedStringCap).toStringEqual(translatedString)
    })

    it("should return '.----' when given a string '1'", ()=> {
        const translatedString = englishToMorse("1")
        expect(translatedString).toBe(".----")
    })


    it("should not modify the original object", ()=>{
        const mockObj = {...morseObject}
        const result = englishToMorse(string)
        expect(morseObject).toStringEqual(mockObj)
    })

    it("should return the correct string in morse code, given a string in english", () => {
        const translatedString = englishToMorse("hello")
        expect(translatedString).not.toBe("--. --- --- -.. -... -.-- .")
    })

    it("should join each character in a string with ' '", ()=> {
        const translatedString = englishToMorse("hello")
        expect(translatedString).toBe(".... . .-.. .-.. ---")
    })
    
 })


 describe('morseToEnglish', () => { 
    it("should return 'a' when given a string '.-'", ()=> {
        const translatedString = morseToEnglish(".-")
        expect(translatedString).toBe("a")
    })

    it("should return '.----' when given a string '1'", ()=> {
        const translatedString = morseToEnglish(".----")
        expect(translatedString).toBe("1")
    })

    it("should return the correct string in english, given a string in morse code", () => {
        const translatedString = englishToMorse("--. --- --- -.. -... -.-- .")
        expect(translatedString).not.toBe("hello")
    })

    it("should join each character in a string with '', the ' 'should be removed", ()=> {
        const translatedString = englishToMorse(".... . .-.. .-.. ---")
        expect(translatedString).toBe("hello")
    })

    it("should return a string that does not have spaces between characters", () => {
        const translatedString = englishToMorse(".... . .-.. .-.. ---")
        expect(translatedString).not.toBe("h e l l o")
    })
    
 })

