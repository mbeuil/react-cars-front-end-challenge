import {Global} from '@emotion/react'
import * as React from 'react'
import {useTheme} from '../../hooks/use-theme'
import * as C from '../../styles/colors'

function GlobalStyles() {
  const {dark} = useTheme()

  return (
    <Global
      styles={{
        body: {
          backgroundColor: dark ? C.bodyDarkBackground : C.bodyLightBackground,
        },
      }}
    />
  )
}

export default GlobalStyles
