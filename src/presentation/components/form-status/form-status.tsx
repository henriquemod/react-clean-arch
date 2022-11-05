import React from 'react'
import { Spinner } from '@/presentation/components'
import Styles from './form-status-styles.scss'

const FormStatus = (): JSX.Element => (
    <div className={Styles.errorWrap}>
    <Spinner className={Styles.spinner} />
    <span className={Styles.error}>Erro</span>
  </div>
)

export default FormStatus
