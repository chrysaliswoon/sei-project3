// register.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

import { faker } from '@faker-js/faker'


describe("registerPage", () => {
    it("Loads the Register Page", () => {
        cy.visit("http://localhost:3000/register");
        cy.contains("Registration Form")
    })
    it("successRegister", () => {
        const randomName = faker.name.findName();
        const randomEmail = faker.internet.email();
        const randomDesc = faker.word.adjective(100);
        const randomBal = faker.random.float();

        cy.visit("http://localhost:3000/register");
        cy.get("#name").type(randomName)
        cy.get("#email").type(randomEmail);
        cy.get("#confirmEmail").type(randomEmail);
        cy.get("#password").type("123");
        cy.get("#confirmPassword").type("123");
        cy.get("#register").click()
        cy.get("#accountName").type(randomName);
        cy.get("#accountDescription").type(randomDesc);
        cy.get("#accountBalance").type(randomBal);
        cy.get("#submit").click();
    });
    // it("failRegister", () => {
    // const randomEmail = faker.internet.email();
    //   cy.visit("http://localhost:3000/register");
    //   cy.get("#email").type(randomEmail);
    //   cy.get("#confirmEmail").type(randomEmail);
    //   cy.get("#password").type("123");
    //   cy.get("#confirmPassword").type("123");
    //     cy.get("#register").click();
    // cy.contains("This field is required");
    // });
}) 