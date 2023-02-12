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

    typeFirstName(firstName) {
      this.firstNameInput.type(firstName)
    }

    typeLastName(lastName) {
      this.lastNameInput.type(lastName)
    }

    typeMiddleName(middleName) {
      this.middleNameInput.type(middleName)
    }

    selectGender(gender) {
      this.gender.click()
      return cy.get('li').contains(gender).should('be.visible').click()
    }

    clicklUpdateInfoButton() {
      this.updateInfoButton.click()
  }

}
 export default ProfileSetttingsPage