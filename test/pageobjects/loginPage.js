import Page from './page';

class LoginPage extends Page {
  get loginButton() { return $$('a[href="/users/showlogin"]')[0]; }

  get signInLink() { return $('a[href="/Users/showLogin"]'); }

  get userEmail() { return $('#email'); }

  get userPassword() { return $('#password'); }

  get submitButton() { return $('.submit_btn'); }

  get errorMessage() { return $('.cmp_warning_circle'); }

  async signInLinkClick() {
    await this.signInLink.click();
  }

  async login(userEmail, password) {
    this.userEmail.setValue(userEmail);
    this.userPassword.setValue(password);
    this.submitButton.click();
  }

  async clickLoginLink() {
    await this.loginButton.click();
  }

  open() {
    return super.open();
  }
}

export default new LoginPage();
