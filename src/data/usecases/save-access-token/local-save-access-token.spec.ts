import { SetStorageMock } from '@/data/test'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'

type SutTypes = {
  sut: LocalSaveAccessToken
  setStorage: SetStorageMock
}

const makeSut = (): SutTypes => {
  const setStorage = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorage)
  return {
    sut,
    setStorage
  }
}

describe('LocalSaveAccessToken', () => {
  test('should call SetStorage with correct value', async () => {
    const { sut, setStorage } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorage.key).toBe('accessToken')
    expect(setStorage.value).toBe(accessToken)
  })

  test('should throw if SetStorage throws', async () => {
    const { sut, setStorage } = makeSut()
    jest.spyOn(setStorage, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(faker.datatype.uuid())
    await expect(promise).rejects.toThrow(new Error())
  })
})
