import faker from 'faker'
import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName = faker.database.column()): SutTypes => {
  const fieldValidationSpy = [
    new FieldValidationSpy(fieldName),
    new FieldValidationSpy(fieldName)
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
    const errorMessage = faker.random.words()
    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe(errorMessage)
  })

  test('should return falsy if no validation fails', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const error = sut.validate(field, faker.random.word())
    expect(error).toBeFalsy()
  })
})
