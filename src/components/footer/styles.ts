import styled from '@emotion/styled'
import * as C from '../../styles/colors'

export const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
})

export const FooterInfo = styled.p(
  {
    fontSize: '14px',
  },
  ({theme}) => (theme ? {color: C.darkSubText} : {color: C.lightSubText}),
)
export const FooterLink = styled.a(
  {
    fontSize: '14px',
    paddingLeft: '5px',
  },
  ({theme}) => (theme ? {color: C.darkNeonBlue} : {color: C.lightNeonBlue}),
)
