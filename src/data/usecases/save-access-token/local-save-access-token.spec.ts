import { SetStorageSpy } from '@/data/test/mock-storage'
import faker from 'faker'
import { LocalSaveAccessToken } from './local-save-access-token'

describe('LocalSaveAccessToken', () => {
  test('should call SetStorage with correct value', async () => {
    const setStorage = new SetStorageSpy()
    const sut = new LocalSaveAccessToken(setStorage)
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStorage.key).toBe('accessToken')
    expect(setStorage.value).toBe(accessToken)
  })
})
