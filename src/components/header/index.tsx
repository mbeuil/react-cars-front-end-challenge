import * as React from 'react'
import CollectionForm from '../collection-form'
import SvgLogoRac from '../logo'
import * as S from './styles'

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderLimits>
        <SvgLogoRac />
        <CollectionForm />
      </S.HeaderLimits>
    </S.HeaderContainer>
  )
}

export default Header
