class ProfilePage {
    //Locators
    get profileSettingsButton() {
       return cy.get('span').contains('Profile settings').should('be.visible')
    }

    get modalCloseButton() {
        return cy.get('.mfp-close').should('be.visible')
     }

    //Actions to locators
    clickProfileSettingButton() {
        this.profileSettingsButton.click()
    }

}
 export default ProfilePage