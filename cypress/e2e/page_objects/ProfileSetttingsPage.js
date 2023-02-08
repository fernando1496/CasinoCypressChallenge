class ProfileSetttingsPage {
    //Locators
    get firstNameInput() {
        return cy.get('[data-test="input-name"]').should('be.visible')
    }

    get lastNameInput() {
        return cy.get('[data-test="input-surname"]').should('be.visible')
     }

     get middleNameInput() {
        return cy.get('[data-test="input-middle_name"]').should('be.visible')
     }

     get selectGenderInput() {
        return cy.get('span').contains('Select gender').should('be.visible')
     }

     get usernameInput() {
        return cy.get('[data-test="input-username"]').should('be.visible')
     }

     get dateInput() {
        return cy.get('[data-test="input-birthdate"]').should('be.visible')
     }

     get updateInfoButton() {
        return cy.get('button').contains('Update info').should('be.visible')
     }

    //Actions to locators
    clickProfileSettingButton() {
        this.profileSettingsButton.click()
    }

}
 export default ProfileSetttingsPage