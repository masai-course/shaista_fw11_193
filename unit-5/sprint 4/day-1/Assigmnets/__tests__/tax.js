const {tax} = require("../index")
const {taxsav}=require("../index")

describe("Rules for tax calculations",function(){
    test("Tax based on savings",function(){
        expect(tax(250000)).toBe("No tax");
    })
     test("Tax amount for 600000",function(){
        expect(tax(600000)).toBe(120000);
    })
     test("Tax amount for 600000",function(){
        expect(tax(400000)).toBe(40000);
    })
    test("Tax amount for 1200000",function(){
        expect(tax(1200000)).toBe(360000);
    })
})

describe("The rules for the rebate based on the savings is mentioned below",function(){
    test("Tax based on savings",function(){
        expect(taxsav(250000)).toBe(125000);
    })
     test("taxsav amount for 600000",function(){
        expect(taxsav(600000)).toBe(180000);
    })
     test("taxsav amount for 600000",function(){
        expect(taxsav(400000)).toBe(200000);
    })
    test("taxsav amount for 1200000",function(){
        expect(taxsav(1200000)).toBe(120000);
    })
})
