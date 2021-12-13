const {convert_digital_storage} = require("../index")
describe("Coverter to convert digital Storages",function(){
    test("Covertation into bytes into kb",function(){
        expect(convert_digital_storage(1,"KB")).toBe("0 KB")
    })
    test("Covertation into bytes into mb",function(){
        expect(convert_digital_storage(9000,"MB")).toBe("4 MB")
    })
    test("Covertation into bytes into GB",function(){
        expect(convert_digital_storage(78000,"GB")).toBe("25 GB")
    })
    test("Covertation into bytes into TB",function(){
        expect(convert_digital_storage(90000,"TB")).toBe("21 TB")
    })
    test("Covertation into bytes into TB",function(){
        expect(convert_digital_storage(77000,"TB")).toBe("18 TB")
    })
})