import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'
import {FaSpinner} from 'react-icons/fa'

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

export const LoadingSpinner = styled(FaSpinner)({
  height: '100px',
  width: '100px',
  alignSelf: 'center',
  animation: `${spin} 1s linear infinite`,
  color: 'var(--color-txt-secondary)',
})
