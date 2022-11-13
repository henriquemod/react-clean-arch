import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): unknown => ({
  status: faker.datatype.number(),
  data: faker.random.objectElement()
})

export const mockAxiosPost = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse())

  return mockedAxios
}
