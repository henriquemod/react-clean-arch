import faker from 'faker'
import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (field = faker.database.column()): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(field),
    new FieldValidationSpy(field)
  ]
  const sut = new ValidationComposite(fieldValidationSpy)

  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const field = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(field)
    fieldValidationSpy[0].error = new Error('first_error_message')
    fieldValidationSpy[1].error = new Error('second_error_message')
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe('first_error_message')
  })
})
