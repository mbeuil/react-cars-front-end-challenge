import * as React from 'react'
import {useTheme} from '../../context/theme-context'
import * as S from './styles'

function ThemeToggler() {
  const {dark, setDark} = useTheme()

  return (
    <div>
      <S.IconButton onClick={() => setDark(() => !dark)}>
        {dark ? <S.SunIcon /> : <S.MoonIcon />}
      </S.IconButton>
    </div>
  )
}

export default ThemeToggler
