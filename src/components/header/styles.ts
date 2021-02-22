import styled from '@emotion/styled'
import * as C from '../../styles/colors'
import * as M from '../../styles/media-queries'

export const HeaderContainer = styled.div(
  {
    height: '56px',
    padding: '0 16px',
    display: 'flex',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    zIndex: 2,

    [M.small]: {
      padding: '0 6px',
    },
  },
  ({theme}) =>
    theme
      ? {
          backgroundColor: C.cardDarkBackground,
          boxShadow: '0 1px 1px rgb(0 0 0 / 30%)',
        }
      : {
          backgroundColor: C.cardLightBackground,
          boxShadow: '0 1px 1px rgb(0 0 0 / 10%)',
        },
)

export const HeaderLimits = styled.div({
  width: '100%',
  maxWidth: '1100px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
})
