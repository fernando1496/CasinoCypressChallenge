/// <reference types="cypress" />
import HomePage from './page_objects/HomePage'
import SignUpPage from './page_objects/SignUpPage'
import ProfilePage from './page_objects/ProfilePage';
import ProfileSetttingsPage from './page_objects/ProfileSetttingsPage';
import { CommonCommands } from './common_commands/CommonCommands';


describe('Sign up regression', () => {
    const homePage = new HomePage()
    const signUpPage = new SignUpPage()
    const profilePage = new ProfilePage()
    const profileSetttingsPage = new ProfileSetttingsPage()
    const randomEmail = CommonCommands.generateRandomEmail()
    const randomPassword = CommonCommands.generateRandomPassword()

    beforeEach(() => {
      cy.visit('https://demo.casino/')
    })
  

    it('Update profile information', () => {
        //1. Close the pop up when page loads.
        homePage.clickModalCloseButton()
        //2. Go to Sign up page.
        homePage.clickSignUpButton()
        //3.Verify destiny URL
        cy.url().should('include', '/registration')
        //4. Type the generated email
        signUpPage.typeEmail(randomEmail)
        //5. Acceept terms and conditions
        signUpPage.acceptAgreements()
        //6. Type the generated password.
        signUpPage.typePassword(randomPassword)
        //7. Re-enter the generated password
        signUpPage.typePasswordConfirmation(randomPassword)
        //8. Click on the create account button
        signUpPage.clickCreateAccountButton()
        //9. Verify title text
        homePage.notificationTitle.should('have.text', ' Congratulations! ');
        //10. Go to your profile
        homePage.clickProfileButton()
        //11. Go to profile settings
        profilePage.clickProfileSettingButton()
        cy.fixture('fakeData.json').then((user) => {
          cy.wrap(user).as('userData');
          //12. Type first name
          profileSetttingsPage.typeFirstName(user.firstName)
          //13. Type last name
          profileSetttingsPage.typeLastName(user.lastName)
          //14. Type middle name
          profileSetttingsPage.typeMiddleName(user.middleName)
          //15. Type middle name
          profileSetttingsPage.clicklUpdateInfoButton()
          //16. Verify notification message
          cy.get('div').contains("Data has been successfully saved").should('be.visible')
        })
        
  })

})