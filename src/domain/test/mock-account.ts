import { AccountModel } from '@/domain/models'
import { AuthenticationParams } from '@/domain/usecases'
import faker from 'faker'
import { v4 as uuid } from 'uuid'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: uuid()
})
