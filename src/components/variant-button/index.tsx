import * as React from 'react'
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
  const {width} = useWitdh()

  return (
    <S.ButtonContainer
      theme={variant}
      type={type}
      value="Submit"
      onClick={handleClick}
    >
      {icon === 'search' && width > 700 ? (
        <S.Button theme={variant}>search</S.Button>
      ) : icon === 'search' && width < 700 ? (
        <S.SearchIcon theme={variant} />
      ) : icon === 'reset' ? (
        <S.ResetIcon theme={variant} />
      ) : icon === 'top' ? (
        <S.TopIcon theme={variant} />
      ) : (
        <S.Button theme={variant}>{icon}</S.Button>
      )}
    </S.ButtonContainer>
  )
}

export default ButtonVariant
