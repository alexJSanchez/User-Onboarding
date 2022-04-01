describe('My First Test', () => {
    beforeEach(() => {

        cy.visit("http://localhost:3000");
       const username = cy.get("input[name=username]");
       const email = cy.get("input[name=email]");
       
        
    })
    it("sanity check", () => {
        cy.get("input[name=username]").type('alex'); 
        cy.get("input[name=email]").type('alex@gmail.com');
        cy.get("input[name=password]").type('welcome');
        cy.get("input[name=tos]").check();
        cy.get("input[type=submit]").click(); 
        cy.get("input[name=username]").should("have.value", 'alex')
        cy.get("input[name=tos]").should("be.checked");
    })
    it("other issues ive encountered", () => {
        cy.get("input[name=username]").type('alex'); 
        
        cy.get("input[name=username]").should("have.length", 4)
        cy.get("input[name=email]").type('alex@gmail.com');
        cy.get("input[name=password]").type('welcome');
        cy.get("input[name=tos]").check();
        cy.get("input[type=submit]").click(); 
        
    })
  })
  