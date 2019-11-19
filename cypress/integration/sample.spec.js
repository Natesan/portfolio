describe("Given a user visits the portfolio", () => {
  it("When they click on the 'Experience' link then the Experience page is loaded and the URL is updated", function() {
    cy.visit("http://localhost:8000")

    cy.wait(1000)

    cy.contains("Experience").click()

    cy.url().should("include", "/experience")

    cy.get("[data-cy=Experience]").should("have.length", 1)
  })
})
