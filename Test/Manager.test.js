const Manager = require("../lib/Manager.js");

describe("Manager",()=>{
    it("Should return the Manager's name",()=>{
        expect(new Manager("John Smith",34567,"jsmith@gmail.com"))
    })
})