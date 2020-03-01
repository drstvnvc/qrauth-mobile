export default class UserBuilder {
  _email = '';
  _password = '';
  _passwordConfirmation = '';
  _firstName = '';
  _lastName = '';
  _avatar = '';
  _securityPin = '';

  setEmail(email) {
    this._email = email;
  }

  setPassword(password) {
    this._password = password;
  }

  setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  }

  setFirstName(firstName) {
    this._firstName = firstName;
  }

  setLastName(lastName) {
    this._lastName = lastName;
  }

  setAvatar(avatar) {
    this._avatar = avatar;
  }

  setSecurityPin(securityPin) {
    this._securityPin = securityPin;
  }

  build() {
    return {
      email: this._email,
      password: this._password,
      password_confirmation: this._passwordConfirmation,
      first_name: this._firstName,
      last_name: this._lastName,
      avatar: this._avatar,
      security_pin: this._securityPin,
    };
  }
}
