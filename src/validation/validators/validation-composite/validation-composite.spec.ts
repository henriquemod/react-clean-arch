import faker from 'faker'
import { FieldValidationSpy } from '../test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const field = faker.database.column()
    const validationSpy = new FieldValidationSpy(field)
    validationSpy.error = new Error('first_error_message')
    const validationSpy2 = new FieldValidationSpy(field)
    validationSpy2.error = new Error('second_error_message')
    const sut = new ValidationComposite([validationSpy, validationSpy2])
    const error = sut.validate(field, faker.random.word())
    expect(error).toBe('first_error_message')
  })
})
