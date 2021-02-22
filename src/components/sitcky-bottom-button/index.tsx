import * as React from 'react'
import {ThemeProvider} from '../../context/theme-context'
import ThemeToggler from '../theme-toggler'
import ButtonVariant from '../variant-button'
import * as S from './styles'

function StickyBottomButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <S.ButtonContainer>
      <ButtonVariant
        variant="mode"
        type="button"
        handleClick={scrollToTop}
        icon="top"
      />
      <ThemeProvider>
        <ThemeToggler />
      </ThemeProvider>
    </S.ButtonContainer>
  )
}

export default StickyBottomButton
