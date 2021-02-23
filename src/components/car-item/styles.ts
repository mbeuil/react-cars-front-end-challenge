import styled from '@emotion/styled'

export const CarItemContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  borderRadius: '5px',
  backgroundColor: 'var(--color-bg-secondary)',
  boxShadow: '0 0 0 1px var(--color-bs-primary)',

  '&:hover': {
    opacity: '0.7',
  },
})

export const BackgroundImage = styled.img({
  width: '100%',
  borderRadius: '5px 5px 0px 0px',
})

export const CarName = styled.span({
  fontSize: '21px',
  fontWeight: 'bold',
  textAlign: 'start',
  padding: '6px 16px 0px',
  color: 'var(--color-txt-primary)',
})

export const CarPricesContainer = styled.div({
  margin: '16px 16px 0px',
  borderTop: '1px solid var(--color-bs-primary)',
  padding: '16px 0px',
  display: 'flex',
  flexDirection: 'column',
})

export const CarTotalContainer = styled.div({
  margin: '16px 16px 0px',
  borderTop: '1px solid var(--color-bs-primary)',
  padding: '16px 0px',
  display: 'flex',
  flexDirection: 'row',
  height: '80px',
})
