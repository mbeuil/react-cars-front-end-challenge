import * as React from 'react'
import {useTheme} from '../../context/theme-context'
import ThemeToggler from '../theme-toggler'
import ButtonVariant from '../variant-button'
import * as S from './styles'

function StickyBottomButton() {
  const {dark} = useTheme()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <S.ButtonContainer theme={dark}>
      <ButtonVariant
        variant="mode"
        type="button"
        handleClick={scrollToTop}
        icon="top"
      />
      <ThemeToggler />
    </S.ButtonContainer>
  )
}

export default StickyBottomButton
