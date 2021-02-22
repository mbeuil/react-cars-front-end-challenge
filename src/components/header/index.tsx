import * as React from 'react'
import {useTheme} from '../../context/theme-context'
import * as C from '../../styles/colors'
import CollectionForm from '../collection-form'
import SvgLogoRac from '../logo'
import * as S from './styles'

function Header() {
  const {dark} = useTheme()

  return (
    <S.HeaderContainer theme={dark}>
      <S.HeaderLimits>
        <SvgLogoRac color={dark ? C.darkPrimary : C.lightPrimary} />
        <CollectionForm />
      </S.HeaderLimits>
    </S.HeaderContainer>
  )
}

export default Header
