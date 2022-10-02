describe("home page tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays welcome message", () => {
    cy.get("h1").should("have.text", "Hello!");
  });
});
