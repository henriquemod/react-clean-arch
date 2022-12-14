import {
  makeRemoteAuthentication
} from '@/main/factories/usecases/authentication/remote-authentication-factory'
import {
  makeLocalSaveAccessToken
} from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { Login } from '@/presentation/pages'
import React from 'react'
import { makeLoginValidation } from './login-validation-factory'

export const makeLogin = (): JSX.Element => (
  <Login
    authentication={makeRemoteAuthentication()}
    validation={makeLoginValidation()}
    saveAccessToken={makeLocalSaveAccessToken()}
  />
)
