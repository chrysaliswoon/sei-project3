import { faker } from "@faker-js/faker";

const URL = "https://moneybank.vercel.app/";

describe("loginPage", () => {
  it("Loads the Register Page", () => {
    cy.visit(URL);
    cy.contains("Sign In");
  });
  it("successLogin", () => {
    cy.visit(URL);
    cy.get("#email").type("mary@gmail.com");
    cy.get("#password").type("123");
    cy.get("#signIn").click();
  });
  // it("failLogin", () => {
  //   const randomEmail = faker.internet.email();
  //   cy.visit(URL);
  //   cy.get("#email").type(randomEmail);
  //   cy.get("#password").type("123");
  //   cy.get("#signIn").click();
  // });
});
