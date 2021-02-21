import * as React from 'react'
import {useTheme} from '../../hooks/use-theme'
import * as S from './styles'

function ThemeToggler() {
  const {dark, setDark} = useTheme()

  return (
    <S.IconButton onClick={() => setDark(() => !dark)}>
      {dark ? <S.SunIcon /> : <S.MoonIcon />}
    </S.IconButton>
  )
}

export default ThemeToggler
