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
  

    it('Sign up successfully', () => {
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


it('Empty email in sign up', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()
    //2. Go to Sign up page.
    homePage.clickSignUpButton()
    //3.Verify destiny URL
    cy.url().should('include', '/registration')
    //4. Acceept terms and conditions
    signUpPage.acceptAgreements()
    //5. Type the generated password.
    signUpPage.typePassword(randomPassword)
    //6. Re-enter the generated password
    signUpPage.typePasswordConfirmation(randomPassword)
    //7. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //8. Verify validation
    signUpPage.emailError.should('include.text', 'Email or phone number is required');
})


it('Invalid password in sign up - no digits', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()
    //2. Go to Sign up page.
    homePage.clickSignUpButton()
    //3.Verify destiny URL
    cy.url().should('include', '/registration')
    //4. Type the generated email
    signUpPage.typeEmail(randomEmail)
    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //5. Type the generated password.
        signUpPage.typePassword(user.invlaidPasswordNoDigits)
        //6. Re-enter the generated password
        signUpPage.typePasswordConfirmation(user.invlaidPasswordNoDigits)
      })
    //7. Acceept terms and conditions
    signUpPage.acceptAgreements()
    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //9. Verify validation
    signUpPage.passwordError.should('include.text', 'Required 1 digit');
})


it('Invalid password in sign up - no capital letter', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()
    //2. Go to Sign up page.
    homePage.clickSignUpButton()
    //3.Verify destiny URL
    cy.url().should('include', '/registration')
    //4. Type the generated email
    signUpPage.typeEmail(randomEmail)
    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //5. Type the generated password.
        signUpPage.typePassword(user.invlaidPasswordNoCapital)
        //6. Re-enter the generated password
        signUpPage.typePasswordConfirmation(user.invlaidPasswordNoCapital)
      })
    //7. Acceept terms and conditions
    signUpPage.acceptAgreements()
    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //9. Verify validation
    signUpPage.passwordError.should('include.text', 'Required 1 capital letter');
})


it('Invalid password in sign up - short password', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()
    //2. Go to Sign up page.
    homePage.clickSignUpButton()
    //3.Verify destiny URL
    cy.url().should('include', '/registration')
    //4. Type the generated email
    signUpPage.typeEmail(randomEmail)
    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //5. Type the generated password.
        signUpPage.typePassword(user.invlaidPasswordShort)
        //6. Re-enter the generated password
        signUpPage.typePasswordConfirmation(user.invlaidPasswordShort)
      })
    //7. Acceept terms and conditions
    signUpPage.acceptAgreements()
    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //9. Verify validation
    signUpPage.passwordError.should('include.text', 'Required Password is too short');
})


it('Invalid password in sign up - empty password', () => {
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
    //6. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //7. Verify validation
    signUpPage.passwordError.should('include.text', 'Password cannot be blank');
})


it('Invalid confirmation password in sign up - empty confirmation password', () => {
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
    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //6. Type the generated password.
        signUpPage.typePassword(user.invlaidPasswordShort)
      })
    //7. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //8. Verify validation
    signUpPage.confirmationPasswordError.should('include.text', 'Password confirmation cannot be blank');
})


it('Invalid confirmation password in sign up - different confirmation password', () => {
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
    cy.fixture('fakeData.json').then((user) => {
        cy.wrap(user).as('userData');
        //6. Type the generated password.
        signUpPage.typePassword(randomPassword)
        //7. Re-enter the generated password
        signUpPage.typePasswordConfirmation(user.differentConfirmationPassword)
      })
    //8. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //9. Verify validation
    signUpPage.confirmationPasswordError.should('include.text', 'Password must be strictly repeated');
})


it('Terms and contitions not accepted', () => {
    //1. Close the pop up when page loads.
    homePage.clickModalCloseButton()
    //2. Go to Sign up page.
    homePage.clickSignUpButton()
    //3.Verify destiny URL
    cy.url().should('include', '/registration')
    //4. Type the generated email
    signUpPage.typeEmail(randomEmail)
    //5. Type the generated password.
    signUpPage.typePassword(randomPassword)
    //6. Re-enter the generated password
    signUpPage.typePasswordConfirmation(randomPassword)
    //7. Click on the create account button
    signUpPage.clickCreateAccountButton()
    //8. Verify validation
    signUpPage.termsAndConditionError.should('include.text', 'You have to accept our Terms and Conditions.');
})
})