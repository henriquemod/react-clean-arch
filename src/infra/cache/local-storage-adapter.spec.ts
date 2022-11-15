import { cleanup, waitFor } from '@testing-library/react'
import faker from 'faker'
import 'jest-localstorage-mock'
import { LocalStorageAdapter } from './local-storage-adapter'

const makeSut = (): LocalStorageAdapter => {
  return new LocalStorageAdapter()
}

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  afterEach(cleanup)
  test('should call localStorage with correct values', async () => {
    const sut = makeSut()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
    })
  })
})
