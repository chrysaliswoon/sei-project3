import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000/";

describe("loginPage", () => {
  it("Loads the Login Page", () => {
    cy.visit(URL);
    cy.contains("Sign In");
  });
  it("successLogin", () => {
    cy.visit(URL);
    cy.get("#email").type("chrysalis@gmail.com");
    cy.get("#password").type("123");
    cy.get("#signIn").click();
  });
}); 