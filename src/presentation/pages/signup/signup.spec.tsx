import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { Router } from 'react-router-dom'
import SignUp from './signup'
import { createMemoryHistory } from 'history'
import { Helper } from '@/presentation/test'

type SutTypes = {
  sut: RenderResult
}

const history = createMemoryHistory({ initialEntries: ['/signup'] })

const makeSut = (): SutTypes => {
  const sut = render(
      <Router location="/signup" navigator={history}>
        <SignUp />
      </Router>
  )
  return {
    sut
  }
}

describe('SignUp Component', () => {
  test('should start with initial state', () => {
    const validationError = 'Campo obrigatório'
    const { sut } = makeSut()
    Helper.testChildCount(sut, 'error-wrap', 0)
    Helper.testButtonIsDisabled(sut, 'submit', true)
    Helper.testStatusForField(sut, 'name', validationError)
    Helper.testStatusForField(sut, 'email', validationError)
    Helper.testStatusForField(sut, 'password', validationError)
    Helper.testStatusForField(sut, 'passwordConfirmation', validationError)
  })
})
