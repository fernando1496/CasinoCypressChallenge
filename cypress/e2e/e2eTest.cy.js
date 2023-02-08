/// <reference types="cypress" />
import HomePage from './page_objects/HomePage'
import SignUpPage from './page_objects/SignUpPage'
import { CommonCommands } from './common_commands/CommonCommands';


describe('Challenge Suite', () => {
    const homePage = new HomePage()
    const signUpPage = new SignUpPage()

    const randomEmail = CommonCommands.generateRandomEmail()
    const randomPassword = CommonCommands.generateRandomPassword()

    beforeEach(() => {
      cy.visit('https://demo.casino/')
      
    })
  
    it.skip('Sign up successfully', () => {
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
  })

  it('Existing email in sign up', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()

    //2. Go to Sign up page.
    homePage.clickSignUpButton()

    //3.Verify destiny URL
    cy.url().should('include', '/registration')

    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //4. Type the generated email
        signUpPage.typeEmail(user.existingUsername)
      })

    //5. Acceept terms and conditions
    signUpPage.acceptAgreements()

    //6. Type the generated password.
    signUpPage.typePassword(randomPassword)

    //7. Re-enter the generated password
    signUpPage.typePasswordConfirmation(randomPassword)

    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()

    //9. Verify validation
    signUpPage.emailError.should('include.text', 'This email has been used for registration already. Please contact customer support.');
})

it('Invalid email in sign up', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()

    //2. Go to Sign up page.
    homePage.clickSignUpButton()

    //3.Verify destiny URL
    cy.url().should('include', '/registration')

    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //4. Type the generated email
        signUpPage.typeEmail(user.invalidUsername)
      })

    //5. Acceept terms and conditions
    signUpPage.acceptAgreements()

    //6. Type the generated password.
    signUpPage.typePassword(randomPassword)

    //7. Re-enter the generated password
    signUpPage.typePasswordConfirmation(randomPassword)

    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()

    //9. Verify validation
    signUpPage.emailError.should('include.text', 'Invalid email.');
})


})