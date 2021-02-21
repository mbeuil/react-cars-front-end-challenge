import 'bootstrap/dist/css/bootstrap-reboot.css'
import * as React from 'react'
import * as S from './App.styles'
import CarCollection from './components/car-collection'
import Footer from './components/footer'
import GlobalStyles from './components/global-styles'
import Header from './components/header'

const App = () => {
  return (
    <S.AppContainer>
      <GlobalStyles />
      <Header />
      <S.CollectionContainer>
        <CarCollection />
      </S.CollectionContainer>
      <Footer />
    </S.AppContainer>
  )
}

export default App
