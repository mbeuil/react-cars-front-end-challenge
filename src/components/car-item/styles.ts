import styled from '@emotion/styled'
import * as C from '../../styles/colors'

export const CarItemContainer = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '5px',

    '&:hover': {
      opacity: '0.7',
    },
  },
  ({theme}) =>
    theme
      ? {
          backgroundColor: C.cardDarkBackground,
          boxShadow: '0 0 0 1px rgb(181,180,186,.25)',
        }
      : {
          backgroundColor: C.cardLightBackground,
          boxShadow: '0 0 0 1px rgb(8 9 10 / 10%)',
        },
)

export const BackgroundImage = styled.img({
  width: '100%',
  borderRadius: '5px 5px 0px 0px',
})

export const CarName = styled.span(
  {
    fontSize: '21px',
    fontWeight: 'bold',
    textAlign: 'start',
    padding: '6px 16px 0px',
  },
  ({theme}) => (theme ? {color: C.darkPrimary} : {color: C.lightPrimary}),
)

export const CarPricesContainer = styled.div({
  margin: '16px 16px 0px',
  borderTop: '1px solid rgba(181,180,186,.25)',
  padding: '16px 0px',
  display: 'flex',
  flexDirection: 'column',
})

export const CarPricesCard = styled.div({
  display: 'grid',
  gridTemplateColumns: 'auto auto',
})

export const CarPriceInfo = styled.span(
  {
    textAlign: 'start',
  },
  ({theme}) => (theme ? {color: C.darkSubText} : {color: C.lightSubText}),
)

export const CarPricePer = styled.span(
  {
    textAlign: 'end',
  },
  ({theme}) => (theme ? {color: C.darkNeonBlue} : {color: C.lightNeonBlue}),
)
