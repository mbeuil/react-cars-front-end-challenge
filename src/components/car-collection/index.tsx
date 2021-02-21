import * as React from 'react'
import useAsync from '../../hooks/use-async'
import {useTheme} from '../../hooks/use-theme'
import {LoadingSpinner} from '../../styles/common-styles'
import {client} from '../../utils/api-client'
import CarItem from '../car-item'
import * as S from './styles'

function CarCollection() {
  const {isIdle, isLoading, isError, data: carList, error, run} = useAsync()
  const {dark} = useTheme()

  React.useEffect(() => {
    run(client('cars.json'))
  }, [run])

  if (isIdle || isLoading) {
    return (
      <S.SpinnerContainer>
        <LoadingSpinner theme={dark} />
      </S.SpinnerContainer>
    )
  }
  if (isError) {
    return (
      <S.ErrorContainer theme={dark}>
        <S.ErrorAlertBox>
          <S.Icon />
          <p>There was an error :</p>
        </S.ErrorAlertBox>
        <pre>{error}</pre>
      </S.ErrorContainer>
    )
  }
  return (
    <>
      <S.CollectionInfo theme={dark}>
        Book unforgettable cars from trusted hosts around the world
      </S.CollectionInfo>
      <S.CollectionContainer>
        {carList.map(({id, ...otherCarItemProps}) => (
          <CarItem key={id} {...otherCarItemProps} />
        ))}
      </S.CollectionContainer>
    </>
  )
}

export default CarCollection
