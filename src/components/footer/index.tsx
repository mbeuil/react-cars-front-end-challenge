import * as React from 'react'
import {useTheme} from '../../hooks/use-theme'
import * as S from './styles'

function Footer() {
  const {dark} = useTheme()
  return (
    <S.FooterContainer>
      <S.FooterInfo theme={dark}>Rent A Car app by </S.FooterInfo>
      <S.FooterLink theme={dark} href="https://www.linkedin.com/in/mbeuil/">
        MBEUIL
      </S.FooterLink>
    </S.FooterContainer>
  )
}

export default Footer
