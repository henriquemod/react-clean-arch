import React from 'react'
import { cleanup, render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'
import SignUp from './signup'
import { createMemoryHistory } from 'history'
import { Helper, ValidationStub } from '@/presentation/test'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
}

type SutParams = {
  validationError: string
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })

const makeSut = (params?: SutParams): SutTypes => {
  const validationStub = new ValidationStub()
  validationStub.errorMessage = params?.validationError
  const sut = render(
      <Router location="/signup" navigator={history}>
        <SignUp validation={validationStub} />
      </Router>
  )
  return {
    sut
  }
}

describe('SignUp Component', () => {
  afterEach(cleanup)
  test('should start with initial state', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({ validationError })
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'password', 'Campo obrigatório')
    Helper.testStatusForField(sut, 'passwordConfirmation', 'Campo obrigatório')
  })

  test('should show name error if Validation fails', () => {
    const validationError = faker.random.words()
    const { sut } = makeSut({
      validationError
    })
    Helper.populateField(sut, 'name')
    Helper.testStatusForField(sut, 'name', validationError)
  })
})
