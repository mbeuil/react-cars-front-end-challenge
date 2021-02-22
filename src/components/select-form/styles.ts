import styled from '@emotion/styled'
import * as M from '../../styles/media-queries'

export const SelectContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100px',
  marginRight: '10px',

  [M.small]: {
    width: '60px',
    marginRight: '5px',
  },
})

export const SelectLabel = styled.label({
  fontSize: '12px',
  marginBottom: '0px',
})

export const SelectInput = styled.select({
  borderRadius: '5px',
  border: '0',
  color: 'var(--color-txt-secondary)',
  backgroundColor: 'var(--color-ip-primary)',
  boxShadow: '0 0 0 1px var(--color-bs-primary)',
})
