class SignUpPage {
    //Locators
    get emailInput() {
        return cy.get('[data-test="input-email"]').should('be.visible')
     }

     get checkbox() {
        return cy.get('label').should('be.visible').contains('unconditionally')
     }

     get passwordInput() {
        return cy.get('[data-test="input-password"]').should('be.visible')
     }

     get confirmPasswordInput() {
        return cy.get('[data-test="input-password_confirmation"]').should('be.visible')
     }

     get createAccountButton() {
        return cy.get('[data-test="control-submit"]').should('be.visible')
     }

     get emailError(){
        return cy.get('[data-test="error-email"]').should('be.visible')
     }

    //Actions to locators
    typeEmail(email) {
        this.emailInput.type(email)
    }

    typePassword(password) {
        this.passwordInput.type(password)
    }

    typePasswordConfirmation(password) {
        this.confirmPasswordInput.type(password)
    }

    acceptAgreements() {
        this.checkbox.click()
    }

    clickCreateAccountButton() {
        this.createAccountButton.click()
    }

    
 }
 
 export default SignUpPage