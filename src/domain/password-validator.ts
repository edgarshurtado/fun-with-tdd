import specialChars from "./special-chars"
export default class PasswordValidator {
  static validate(pass: string): boolean {
    return (
      this.validateLength(pass) &&
      this.validateSpecialChars(pass) &&
      this.validateLowercase(pass) &&
      this.validateUppercase(pass)
    )
  }

  static validateLength(pass: string): boolean {
    return pass.length >= 8 && pass.length <= 12
  }

  static validateSpecialChars(pass: string): boolean {
    return specialChars.some((char) => pass.includes(char))
  }

  static validateLowercase(pass: string): boolean {
    return /[a-z]/.test(pass)
  }
  static validateUppercase(pass: string): boolean {
    return /[A-Z]/.test(pass)
  }
}
