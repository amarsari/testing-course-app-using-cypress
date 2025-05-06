describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(1024, 768)
  })
  
  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
  })
})