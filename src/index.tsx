import * as React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {ThemeProvider} from './hooks/use-theme'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('reactAnchor')

  ReactDom.render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
    container,
  )
})
