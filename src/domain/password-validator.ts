import specialChars from "./special-chars"
export default class PasswordValidator {
  #pass: string

  constructor(pass: string) {
    this.#pass = pass
  }

  validate(): boolean {
    return (
      this.validateLength() &&
      this.validateSpecialChars() &&
      this.validateLowercase() &&
      this.validateUppercase()
    )
  }

  validateLength(): boolean {
    return this.#pass.length >= 8 && this.#pass.length <= 12
  }

  validateSpecialChars(): boolean {
    return specialChars.some((char) => this.#pass.includes(char))
  }

  validateLowercase(): boolean {
    return /[a-z]/.test(this.#pass)
  }
  validateUppercase(): boolean {
    return /[A-Z]/.test(this.#pass)
  }
}
