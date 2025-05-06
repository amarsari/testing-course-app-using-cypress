describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.viewport(1024, 768)
  })
  
  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })

    it("the features of the home page are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section testing each option", () => {
    it("Lesson Progress Link 0", () => {
      cy.getByData("lesson-progress-link-0").eq(0).click()
      cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
    })

    it("Lesson Progress Link 1", () => {
      cy.getByData("lesson-progress-link-1").eq(0).click()
      cy.location("pathname").should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
    })

    it("Lesson Progress Link 2", () => {
      cy.getByData("lesson-progress-link-2").eq(0).click()
      cy.location("pathname").should("eq", "/testing-your-first-application/setting-up-data-before-each-test")
    })

    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").click()
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
  })
})