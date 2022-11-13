import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'

describe('MinLengthValidation', () => {
  test('should return error if value is invalid', () => {
    const sut = new MinLengthValidation('email', 5)
    const error = sut.validate('')
    expect(error).toEqual(new InvalidFieldError())
  })
})
