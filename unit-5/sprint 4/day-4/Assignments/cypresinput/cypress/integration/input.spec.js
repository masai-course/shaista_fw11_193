/// <reference types="Cypress"/>

// describe("input form checking",() => {
//     beforeEach(() => {
//         cy.visit("http://localhost:3000")
//     })
//     it('Check if input tag exist or not',() => {
//         cy.visit("http://localhost:3000")
//         cy.get(".inputtext").should("exist")
//     })

//     it("typing the value into the input box",() => {
//         cy.get(".inputtext").type('learn React').should("have.value","learn React")
//     })
// })


describe("Checking about the todo Applications",() => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it("Checking about the todo input element",() => {
        cy.visit("http://localhost:3000");
        cy.get(".todoinput").should("exist");
        cy.get(".todobtn").should("exist");
    })

    it("typing the value into the input box",() => {
        cy.get(".todoinput").type('learn React',{delay:200}).should("have.value","learn React")
        cy.get(".todobtn").click();
        cy.get(".todoinput").clear();
        cy.get(".todoinput").type('learn vue',{delay:200}).should("have.value","learn vue")
        cy.get(".todobtn").click();
        cy.get(".todoinput").should("have.length",1);
    })

    it("Mock server api",() => {
        cy.intercept("GET","https://reqres.in/api/users",{});
        // eslint-disable-next-line jest/valid-expect-in-promise
        cy.request("https://reqres.in/api/users").then((data)=>{
            cy.log(data.body.data);
            // expect(data.body.data.first_name).to.eq("George");
        })
    })
})