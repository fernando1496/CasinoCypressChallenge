/// <reference types="cypress" />
import HomePage from './page_objects/HomePage'
import SignUpPage from './page_objects/SignUpPage'
import { CommonCommands } from './common_commands/CommonCommands';


describe('Sign up regression', () => {
    const homePage = new HomePage()
    const signUpPage = new SignUpPage()
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
  })

})