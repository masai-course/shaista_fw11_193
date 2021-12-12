
const {sum} = require("../index")
describe("Sum of N numbers",function(){
    test("Addition",function(){
        expect(sum(5)).toBe(15);
    })
})