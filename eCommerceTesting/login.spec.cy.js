describe('login new user', () => {
  //Login testing at buggy cars test site
  before(() => {
    // create new user
    cy.visit("https://buggy.justtestit.org/register")
    cy.get('#username').type("johnDoe")
    cy.get('#firstName').type("john")
    cy.get('#lastName').type("doe")
    cy.get('#password').type("jDoe123$")
    cy.get('#confirmPassword').type("jDoe123$")
    cy.get('.btn-default').click()
    cy.get('.result').contains("Registration is successful").should("be.visible")
 
  })
  beforeEach(()=>{
    // Iniciate homepage at all test case
    cy.visit("https://buggy.justtestit.org")
  })
  
  it("Test case 1",()=>{
    // Login with wrong username
    cy.get('.input-sm').type("wrongUser")
    cy.get('.ng-invalid').type("jDoe123$")
    cy.get('.btn-success').click()
    
    cy.get('.label').contains("Invalid username/password").should("be.visible")
  })
  it("Test case 2",()=>{
    // Login with wrong password
    cy.get('.input-sm').type("johnDoe")
    cy.get('.ng-invalid').type("wrongPassword")
    cy.get('.btn-success').click()
    cy.get('.label').contains("Invalid username/password").should("be.visible")
  })
  it("Test case 3",()=>{
    // Login with correct user data
    cy.get('.input-sm').type("johnDoe")
    cy.get('.ng-invalid').type("jDoe123$")
    cy.get('.btn-success').click()
    cy.get(':nth-child(1) > .nav-link').contains("Hi, john").should("be.visible")
  })
  after(()=>{
    // Delete new user created
    // This section gives error due to api auth request
    cy.request("DELETE","${https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/current}/users/${johnnnnnny}").then((response) => {
      expect(response.status).to.eq(200)
    
    })
  })
})