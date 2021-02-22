import {Global} from '@emotion/react'
import * as React from 'react'

function GlobalStyles() {
  return (
    <Global
      styles={{
        ':root': {
          '--color-bg-primary': '#eef0f1',
          '--color-bg-secondary': '#fff',
          '--color-bg-tertiary': '#f9fafa',
          '--color-txt-primary': '#202428',
          '--color-txt-secondary': '#64707d',
          '--color-blue-primary': '#3b49df',
          '--color-red-primary': '#cf404d',
          '--color-bt-primary': '#b5bdc4',
          '--color-ip-primary': '#f9fafa',
          '--color-bs-primary': 'rgb(8 9 10 / 10%)',
          '--color-bs-secondary': 'rgb(0 0 0 / 10%)',
        },
        '.dark': {
          '--color-bg-primary': '#0d1219',
          '--color-bg-secondary': '#1a2634',
          '--color-bg-tertiary': 'rgb(30 34 41)',
          '--color-txt-primary': '#f9fafa',
          '--color-txt-secondary': '#8D949B',
          '--color-blue-primary': '#7B78FF',
          '--color-red-primary': '#cf404d',
          '--color-bt-primary': '#444f5b',
          '--color-ip-primary': '#2e3a48',
          '--color-bs-primary': 'rgb(181,180,186,.25)',
          '--color-bs-secondary': 'rgb(0 0 0 / 30%)',
        },
        body: {
          backgroundColor: 'var(--color-bg-primary)',
        },
      }}
    />
  )
}

export default GlobalStyles

// const PrimaryText = styled.div({
//   padding: 20,
//   color: 'var(--colors-primary)',
//   backgroundColor: 'var(--colors-background)',
// })
