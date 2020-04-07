describe("Given a user visits the portfolio", () => {
  it("When they click on the 'Work' link then the Work page is loaded and the URL is updated", function() {
    cy.visit("http://localhost:8000")

    cy.wait(1000)

    cy.contains("Work").click()

    cy.url().should("include", "/work")

    cy.get("[data-cy=Experience]").should("have.length", 1)
  })

  it("When they click on the 'Work' link then the Work page is loaded and the URL is updated", function() {
    cy.visit("http://localhost:8000")

    cy.wait(1000)

    cy.contains("Work").click()

    cy.url().should("include", "/work")

    cy.get("[data-cy=Skills]").should("have.length", 1)
  })
})
