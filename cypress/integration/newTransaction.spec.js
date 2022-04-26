import { faker } from "@faker-js/faker";

const URL = "http://localhost:3000/form";

describe("newTransaction", () => {
  it("Loads the Transaction Page", () => {
    cy.visit(URL);
    cy.contains("New Transaction");
  });
  it("newTransaction", () => {
    const randomBal = faker.random.float();
    const randomName = faker.name.findName();
    const randomDesc = faker.word.adjective(100);

    cy.visit(URL);
    cy.get("#date").type("26/04/2022");
    cy.get("#account").type("DBS Altitude");
    cy.get("#amount").type(randomBal);
    cy.get("#recipient").type(randomName);
    cy.get("#transaction").type(randomDesc);
    cy.get("#income").click();
  });
});
