const {convert_digital_storage} = require("../index")
describe("Coverter to convert digital Storages",function(){
    test("Covertation into bytes into kb",function(){
        expect(convert_digital_storage(1,"KB")).toBe("0.000 KB")
    })
    test("Covertation into bytes into mb",function(){
        expect(convert_digital_storage(99900,"MB")).toBe("0.100 MB")
    })
    test("Covertation into bytes into GB",function(){
        expect(convert_digital_storage(7800000,"GB")).toBe("0.007 GB")
    })
    test("Covertation into bytes into TB",function(){
        expect(convert_digital_storage(9887770000,"TB")).toBe("0.009 TB")
    })
    test("Covertation into bytes into TB",function(){
        expect(convert_digital_storage(77988888000,"TB")).toBe("0.071 TB")
    })
})