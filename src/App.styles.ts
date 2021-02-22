import styled from '@emotion/styled'
import * as M from './styles/media-queries'

export const AppContainer = styled.div({
  maxWidth: '1100px',
  margin: '0 auto 0 auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',

  [M.small]: {
    maxWidth: '850px',
  },
})

export const CollectionContainer = styled.div({
  paddingTop: '56px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
})
