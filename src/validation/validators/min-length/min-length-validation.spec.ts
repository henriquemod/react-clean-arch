import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const sut = new MinLengthValidation('email', 5)
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })

  test('should falsy if value is valid', () => {
    const sut = new MinLengthValidation('email', 5)
    const error = sut.validate('123456')
    expect(error).toBeFalsy()
  })
})
