import LoginPage from '../pageobjects/loginPage'
import NotePage from '../pageobjects/notePage'
import constants from '../utils/constants'

describe ('Login Test Suite', () => {

    beforeEach(() => {
        LoginPage.open()
        LoginPage.signInLinkClick()
      })

    it('login with wrong credentials', () => {
        LoginPage.login(constants.WRONGEMAIL,constants.WRONGPASSWORD);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty email', () => {   
         LoginPage.login(constants.EMPTY,constants.WRONGPASSWORD);
         expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('login with empty password', () => {  
         LoginPage.login(constants.EMAIL,constants.EMPTY);
        expect(LoginPage.errorMessage).toBeDisplayed();
    });

    it('Successful login', () => {  
        LoginPage.login(constants.USER_EMAIL, constants.USER_PASSWORD);
        expect(NotePage.menu_toggle).toBeDisplayed(); 
    });
});