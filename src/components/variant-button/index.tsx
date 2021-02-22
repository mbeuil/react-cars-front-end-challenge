import * as React from 'react'
import {useTheme} from '../../context/theme-context'
import useWitdh from '../../hooks/use-width'
import * as S from './styles'

type ButtonVariantProps = {
  icon?: string
  variant?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  handleClick?: () => void
}

function ButtonVariant({
  icon = 'submit',
  variant = 'primary',
  type = 'submit',
  handleClick,
}: ButtonVariantProps) {
  const {dark} = useTheme()
  const {width} = useWitdh()

  return (
    <S.ButtonContainer
      theme={`${variant} ${dark}`}
      type={type}
      value="Submit"
      onClick={handleClick}
    >
      {icon === 'search' && width > 700 ? (
        <S.Button theme={`${variant} ${dark}`}>search</S.Button>
      ) : icon === 'search' && width < 700 ? (
        <S.SearchIcon theme={`${variant} ${dark}`} />
      ) : icon === 'reset' ? (
        <S.ResetIcon theme={`${variant} ${dark}`} />
      ) : icon === 'top' ? (
        <S.TopIcon theme={`${variant} ${dark}`} />
      ) : (
        <S.Button theme={`${variant} ${dark}`}>{icon}</S.Button>
      )}
    </S.ButtonContainer>
  )
}

export default ButtonVariant
