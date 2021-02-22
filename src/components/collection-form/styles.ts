import styled from '@emotion/styled'
import * as M from '../../styles/media-queries'

export const FormContainer = styled.form({
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'row',
  borderRadius: '5px',
  color: 'var(--color-txt-secondary)',
})

export const ParamsContainer = styled.div({})

export const ButtonContainer = styled.div({
  marginLeft: 'auto',

  [M.small]: {
    marginLeft: '0',
  },
})
