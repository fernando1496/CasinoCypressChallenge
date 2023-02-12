class HomePage {
    //Locators
    get signUpButton() {
       return cy.get('span').contains('Sign up').should('be.visible')
    }

    get modalCloseButton() {
        return cy.get('.mfp-close').should('be.visible')
     }

    get notificationTitle() {
        return cy.get('.notification__title').should('be.visible')
     }

     get viewProfileButton() {
        return cy.get('span').contains('View profile').should('be.visible')
     }

    //Actions to locators
    clickSignUpButton() {
        this.signUpButton.click()
    }

    clickModalCloseButton() {
        this.modalCloseButton.click()
    }

    clickProfileButton() {
        this.viewProfileButton.click()
    }
}
 export default HomePage