import styled from '@emotion/styled'
import {BiMoon, BiSun} from 'react-icons/bi'
import * as C from '../../styles/colors'

export const SunIcon = styled(BiSun)({
  height: '30px',
  width: '30px',
  color: C.darkPrimary,
  alignSelf: 'center',
})
export const MoonIcon = styled(BiMoon)({
  height: '30px',
  width: '30px',
  color: C.lightPrimary,
  alignSelf: 'center',
})

export const IconButton = styled.button({
  margin: '4px auto',
  border: 'none',
  backgroundColor: 'initial',
  marginLeft: 'auto',
})
