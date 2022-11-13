import Context from '@/presentation/contexts/form/form-context'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import faker from 'faker'
import React from 'react'
import Input from './input'

const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={ { state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
}

describe('Input Component', () => {
  test('should begin with readOnly', () => {
    const fieldName = faker.database.column()
    const { getByTestId } = makeSut(fieldName)
    const input = getByTestId(fieldName) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('should remove readOnly on focus', () => {
    const fieldName = faker.database.column()
    const { getByTestId } = makeSut(fieldName)
    const input = getByTestId(fieldName) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
