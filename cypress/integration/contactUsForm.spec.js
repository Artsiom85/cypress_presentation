/// <reference types="cypress"/>

describe('Verify the validation  on the Contact Us form', () => {

   it('Navigate to contact us form', () => {
       cy.visit('/')
   })

   it('Verify the validation for the fields', () => {
       
        cy.get('[type="submit"]').click() 
        cy.get('[class="wpcf7-form-control-wrap FirstName"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class ="wpcf7-form-control-wrap EmailAddr"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap CompanyName"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap OrgType1"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap Country1"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap ContactReason1"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap LastName"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap EmailConfirm"]')
          .should('contain.text', 'The field is required.')
        cy.get('[class="wpcf7-form-control-wrap JobTitle2"]')
          .should('contain.text', 'The field is required.')
        
   })
 
   it('Verify that a customer can fill out the form', () => {
    cy.get('#FirstName').click().type('John')
    cy.get('#LastName').click().type('Snow')
    cy.get('#EmailAddr').click().type('JohnSnow@mail.cm')
    cy.get('#EmailConfirm').click().type('JohnSnow@mail.com')
    cy.get('#Telephone').click().type('+712345678')
    cy.get('#CompanyName').click().type('Dragonstone')
    cy.get('#JobTitle2').click().type('The Prince')
    cy.get('#LastName').click().type('Snow')
    cy.get('#OrgType1').then(dropdown =>{
       cy.wrap(dropdown).select('Association')
   })
    cy.get('#Country1').then(dropdown =>{
        cy.wrap(dropdown).select('Georgia')
    })
    cy.get('#ContactReason1').then(dropdown =>{
        cy.wrap(dropdown).select('General Information')
    })
    cy.get('#Questions1').click().type('Is something wrong?')
    cy.get('[type="submit"]').click()
    cy.get('[class="wpcf7-form-control-wrap EmailConfirm"]')
    .should('contain.text','The emails entered do not match')
    cy.get('[class="wpcf7-form-control-wrap Telephone"]')
    .should('contain.text','Letters and special characters are not permitted')
})
})




