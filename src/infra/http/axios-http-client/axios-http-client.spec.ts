import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('should call Axios with correct URL', async () => {
    const url = faker.internet.url()
    const axiosSpy = jest.spyOn(mockedAxios, 'post')
    const sut = makeSut()
    await sut.post({
      url
    })
    expect(axiosSpy).toHaveBeenCalledWith(url)
  })
})
