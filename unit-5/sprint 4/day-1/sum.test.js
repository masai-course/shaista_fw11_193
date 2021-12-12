const {sum} = require("./index")


describe("Addition" , function(){
     test("Addition of two position number", function(){
    expect(sum(5,3)).toBe(8); 
})
})
