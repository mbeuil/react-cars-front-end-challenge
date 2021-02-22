import styled from '@emotion/styled'
import * as C from '../../styles/colors'

export const ButtonContainer = styled.div(
  {
    position: 'fixed',
    bottom: '1%',
    right: '1%',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '5px',
    padding: '5px 0px',
  },
  ({theme}) =>
    theme
      ? {
          backgroundColor: C.cardDarkBackground,
          boxShadow: '0 0 0 1px rgb(181,180,186,.25)',
        }
      : {
          backgroundColor: C.cardLightBackground,
          boxShadow: '0 0 0 1px rgb(8 9 10 / 10%)',
        },
)
