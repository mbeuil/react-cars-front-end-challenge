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
    marginRight: '0px',
    marginTop: 'auto',
    color: 'var(--color-blue-primary)',
  },
  ({theme}) => (theme === 'total' ? {fontSize: '28px'} : null),
)

export const CarOldPrice = styled.div({
  marginLeft: 'auto',
  marginTop: 'auto',
  color: 'var(--color-txt-secondary)',
  fontSize: '28px',
  marginRight: '10px',
  textDecoration: 'line-through',
})
