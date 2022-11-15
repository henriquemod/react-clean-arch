import { SaveAccessToken } from '@/domain/usecases'

export class SaveAccessTokenMock implements SaveAccessToken {
  accessToken: string
  save = async (accessToken: string): Promise<void> => {
    this.accessToken = accessToken
  }
}
