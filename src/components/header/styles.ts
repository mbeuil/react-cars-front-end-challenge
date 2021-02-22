import styled from '@emotion/styled'
import * as M from '../../styles/media-queries'

export const HeaderContainer = styled.div({
  height: '56px',
  padding: '0 16px',
  display: 'flex',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: 2,
  backgroundColor: 'var(--color-bg-secondary)',
  boxShadow: '0 1px 1px var(--color-bs-secondary)',

  [M.small]: {
    padding: '0 6px',
  },
})

export const HeaderLimits = styled.div({
  width: '100%',
  maxWidth: '1100px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})
