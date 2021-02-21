import styled from '@emotion/styled'
import {BiMoon, BiSun} from 'react-icons/bi'
import * as C from '../../styles/colors'

export const SunIcon = styled(BiSun)({
  height: '40px',
  width: '40px',
  color: C.darkPrimary,
  alignSelf: 'center',
})
export const MoonIcon = styled(BiMoon)({
  height: '40px',
  width: '40px',
  color: C.lightPrimary,
  alignSelf: 'center',
})

export const IconButton = styled.button({
  height: '40px',
  border: 'none',
  backgroundColor: 'initial',
  marginLeft: 'auto',
})
