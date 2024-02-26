import PasswordValidator from "@/domain/password-validator"
import specialChars from "@/domain/special-chars"

describe("PasswordValidator", () => {
  test("password is invalid if it is shorter than 8 characters", () => {
    const password = new Array(7).fill("a").join("")
    expect(new PasswordValidator(password).validateLength()).toBeFalsy()
  })

  test("password is valid if it is between 8 and 12 characters long", () => {
    const password = new Array(8).fill("a").join("")
    expect(new PasswordValidator(password).validateLength()).toBeTruthy()
  })

  test("password is invalid if it is longer than 12", () => {
    const password = new Array(13).fill("a").join("")
    expect(new PasswordValidator(password).validateLength()).toBeFalsy()
  })

  test("password with no special char is invalid", () => {
    const password = "a"
    expect(new PasswordValidator(password).validateSpecialChars()).toBeFalsy()
  })

  for (const char of specialChars) {
    test(`password is valid if has ${char}`, () => {
      const password = "a" + char
      expect(new PasswordValidator(password).validateSpecialChars()).toBeTruthy()
    })
  }

  test("password is valid if has a lowercase char", () => {
    const password = "a"
    expect(new PasswordValidator(password).validateLowercase()).toBeTruthy()
  })

  test("password is invalid if does NOT have any lowercase char", () => {
    const password = "A"
    expect(new PasswordValidator(password).validateLowercase()).toBeFalsy()
  })

  test("password is valid if has an uppercase char", () => {
    const password = "A"
    expect(new PasswordValidator(password).validateUppercase()).toBeTruthy()
  })

  test("password is invalid if does NOT have any uppercase char", () => {
    const password = "a"
    expect(new PasswordValidator(password).validateUppercase()).toBeFalsy()
  })

  test("full requirement password is valid", () => {
    const fullPassword = "aaaaAaaa$"
    expect(new PasswordValidator(fullPassword).validate()).toBeTruthy()
  })
})
