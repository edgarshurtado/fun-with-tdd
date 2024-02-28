import specialChars from "./special-chars"
export default class PasswordValidator {
  private pass: string

  constructor(pass: string) {
    this.pass = pass
  }

  validate(): boolean {
    return (
      this.validateLength() &&
      this.validateSpecialChars() &&
      this.validatePasswordHasLowerAndUppercaseLetters()
    )
  }

  validateLength(): boolean {
    return this.pass.length >= 8 && this.pass.length <= 12
  }

  validateSpecialChars(): boolean {
    return specialChars.some((char) => this.pass.includes(char))
  }

  private validateLowercase(): boolean {
    return /[a-z]/.test(this.pass)
  }

  private validateUppercase(): boolean {
    return /[A-Z]/.test(this.pass)
  }

  validatePasswordHasLowerAndUppercaseLetters(): boolean {
    return this.validateLowercase() && this.validateUppercase()
  }
}
