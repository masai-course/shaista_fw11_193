/// <reference types="Cypress"/>

describe("Checkging the input",() => {
    beforeEach("Checking if the server is running or not",() => {
        cy.visit("http://localhost:3000")
    })
    it("describe the input",() => {
        cy.visit("http://localhost:3000")
        cy.get(".inp").should("exist");
        cy.get(".btn").should("exist");
        cy.get(".inp").type("Learn React").should("have.value","Learn React");
        cy.get(".btn").click();
    })
})
