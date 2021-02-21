import * as React from 'react'
import {useTheme} from '../../hooks/use-theme'
import * as C from '../../styles/colors'
import SvgLogoRac from '../logo'
import ThemeToggler from '../theme-toggler'
import * as S from './styles'

function Header() {
  const {dark} = useTheme()

  return (
    <S.HeaderContainer theme={dark}>
      <S.HeaderLimits>
        <SvgLogoRac color={dark ? C.darkPrimary : C.lightPrimary} />
        <ThemeToggler />
      </S.HeaderLimits>
    </S.HeaderContainer>
  )
}

export default Header
