import 'bootstrap/dist/css/bootstrap-reboot.css'
import * as React from 'react'
import * as S from './App.styles'
import CarCollection from './components/car-collection'
import Footer from './components/footer'
import GlobalStyles from './components/global-styles'
import Header from './components/header'
import StickyBottomButton from './components/sitcky-bottom-button'
import {SearchProvider} from './context/searchParams-context'

const App = () => {
  return (
    <S.AppContainer>
      <GlobalStyles />
      <SearchProvider>
        <Header />
        <S.CollectionContainer>
          <CarCollection />
        </S.CollectionContainer>
      </SearchProvider>
      <StickyBottomButton />
      <Footer />
    </S.AppContainer>
  )
}

export default App
