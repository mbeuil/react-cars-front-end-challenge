import styled from '@emotion/styled'
import * as C from '../../styles/colors'
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

export const SelectInput = styled.select(
  {
    borderRadius: '5px',
    border: '0',
  },
  ({theme}) =>
    theme
      ? {
          color: C.darkSubText,
          backgroundColor: C.inputDarkColor,
          boxShadow: '0 0 0 1px rgb(181,180,186,.25)',
        }
      : {
          color: C.lightSubText,
          backgroundColor: C.menuLightBackground,
          boxShadow: '0 0 0 1px rgb(8 9 10 / 10%)',
        },
)
