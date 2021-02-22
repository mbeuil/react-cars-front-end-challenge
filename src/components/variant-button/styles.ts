import {Theme} from '@emotion/react'
import styled from '@emotion/styled'
import {BiReset, BiSearchAlt} from 'react-icons/bi'
import {TiArrowSortedUp} from 'react-icons/ti'

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
    theme === 'primary'
      ? {backgroundColor: 'var(--color-blue-primary)'}
      : {backgroundColor: 'inherit'},
)
const iconTemplate = {
  height: '25px',
  width: '25px',
  alignSelf: 'center',
}

function propsTemplate(theme: Theme) {
  return theme === 'primary'
    ? {color: 'var(--color-bg-tertiary)'}
    : theme === 'secondary'
    ? {color: 'var(--color-txt-secondary)'}
    : theme === 'mode'
    ? {color: 'var(--color-txt-primary)'}
    : {color: 'var(--color-bg-tertiary)'}
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
