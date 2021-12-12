const {time} = require("../index")
describe("Time convertion",function(){
    test("Time",function(){
        expect(time(180000)).toBe("0 hour 3 minutes 0 second");
    })
    test("Time",function(){
        expect(time(5200)).toBe("0 hour 0 minute 5 seconds");
    })
    test("Time",function(){
        expect(time(60000)).toBe("0 hour 1 minute 0 second");
    })
    test("Time",function(){
        expect(time(200000)).toBe("0 hour 3 minutes 20 seconds");
    })
  
})