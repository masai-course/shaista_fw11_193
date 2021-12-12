const {validatePassword} = require("../index")
describe("Password",function(){
    test("Testing password",function(){
        expect(validatePassword("aA1234plL")).toBe("correct password");
    })
})