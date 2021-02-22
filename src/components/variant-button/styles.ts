import {Theme} from '@emotion/react'
import styled from '@emotion/styled'
import {BiReset, BiSearchAlt} from 'react-icons/bi'
import {TiArrowSortedUp} from 'react-icons/ti'
import * as C from '../../styles/colors'

export const ButtonContainer = styled.button(
  {
    minWidth: '40px',
    height: '40px',
    border: '0',
    lineHeight: '1',
    borderRadius: '5px',
    padding: 'auto',
  },
  ({theme}) =>
    theme === 'primary true'
      ? {background: C.darkNeonBlue}
      : theme === 'primary false'
      ? {background: C.lightNeonBlue}
      : {background: 'inherit'},
)
const iconTemplate = {
  height: '25px',
  width: '25px',
  alignSelf: 'center',
}

function propsTemplate(theme: Theme) {
  return theme === 'primary true'
    ? {color: C.menuDarkBackground}
    : theme === 'primary false'
    ? {color: C.menuLightBackground}
    : theme === 'secondary true'
    ? {color: C.darkSubText}
    : theme === 'secondary false'
    ? {color: C.lightSubText}
    : theme === 'mode true'
    ? {color: C.darkPrimary}
    : theme === 'mode false'
    ? {color: C.lightPrimary}
    : theme === ' true'
    ? {color: C.menuDarkBackground}
    : {color: C.menuLightBackground}
}

export const SearchIcon = styled(BiSearchAlt)(iconTemplate, ({theme}) =>
  propsTemplate(theme),
)

export const ResetIcon = styled(BiReset)(iconTemplate, ({theme}) =>
  propsTemplate(theme),
)

export const TopIcon = styled(TiArrowSortedUp)(iconTemplate, ({theme}) =>
  propsTemplate(theme),
)

export const Button = styled.div({}, ({theme}) => propsTemplate(theme))
