import styled from '@emotion/styled'

export const CarPricesCard = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
})

export const CarPriceInfo = styled.span({
  marginRight: 'auto',
  marginTop: 'auto',
  color: 'var(--color-txt-secondary)',
})

export const CarPricePer = styled.span(
  {
    marginLeft: 'auto',
    marginTop: 'auto',
    color: 'var(--color-blue-primary)',
  },
  ({theme}) => (theme === 'total' ? {fontSize: '28px'} : null),
)
