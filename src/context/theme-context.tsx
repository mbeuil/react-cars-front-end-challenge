import * as React from 'react'

type ThemeContextType =
  | {
      dark: boolean
      setDark: React.Dispatch<React.SetStateAction<boolean>>
    }
  | undefined

const ThemeContext = React.createContext<ThemeContextType>(undefined)

function getInitialValue() {
  const persistedTheme = window.localStorage.getItem('isDark')

  if (persistedTheme) return JSON.parse(persistedTheme)
  else return true
}

function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme should be used within a ThemeProvider')
  }
  return context
}

function ThemeProvider({...props}) {
  const [dark, setDark] = React.useState(getInitialValue())

  React.useEffect(() => {
    window.localStorage.setItem('isDark', JSON.stringify(dark))

    if (dark) {
      window.document.body.classList.add('dark')
    } else {
      window.document.body.classList.remove('dark')
    }
  }, [dark])

  return <ThemeContext.Provider value={{dark, setDark}} {...props} />
}

export {useTheme, ThemeProvider}
