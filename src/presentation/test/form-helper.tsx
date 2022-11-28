import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const testChildCount = (sut: RenderResult, fieldName: string, count: number): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDisabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateEmailField = (
  sut: RenderResult,
  email: string = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId('email')
  fireEvent.input(emailInput, { target: { value: email } })
}

export const populatePasswordField = (
  sut: RenderResult,
  password: string = faker.internet.email()
): void => {
  const passwordInput = sut.getByTestId('password')
  fireEvent.input(passwordInput, {
    target: { value: password }
  })
}

export const simulateValidSubmit = (
  sut: RenderResult,
  email: string = faker.internet.email(),
  password: string = faker.internet.password()
): void => {
  populateEmailField(sut, email)
  populatePasswordField(sut, password)

  const submitButton = sut.getByTestId('submit')
  fireEvent.click(submitButton)
}

export const testElementExists = (sut: RenderResult, name: string): void => {
  const element = sut.getByTestId(name)
  expect(element).toBeTruthy()
}

export const testElementText = (
  sut: RenderResult,
  name: string,
  message: string
): void => {
  const element = sut.getByTestId(name)
  expect(element.textContent).toBe(message)
}
