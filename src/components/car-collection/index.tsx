import * as React from 'react'
import {useSearchParams} from '../../context/searchParams-context'
import useAsync from '../../hooks/use-async'
import {LoadingSpinner} from '../../styles/common-styles'
import {client} from '../../utils/api-client'
import CarItem from '../car-item'
import * as S from './styles'

function CarCollection() {
  const {isIdle, isLoading, isError, data: carList, error, run} = useAsync()
  const {duration, distance} = useSearchParams()

  React.useEffect(() => {
    run(client(`cars.json?duration=${duration}&distance=${distance}`))
  }, [duration, distance])

  if (isIdle || isLoading) {
    return (
      <S.SpinnerContainer>
        <LoadingSpinner />
      </S.SpinnerContainer>
    )
  }
  if (isError) {
    return (
      <S.ErrorContainer>
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
      <S.CollectionInfo>
        {carList.length
          ? 'Book unforgettable cars from trusted hosts around the world !'
          : 'Sorry, we found no cars matching your needs ...'}
      </S.CollectionInfo>
      <S.CollectionContainer>
        {carList.map(({id, ...otherCarItemProps}) => (
          <CarItem
            key={id}
            duration={duration}
            distance={distance}
            {...otherCarItemProps}
          />
        ))}
      </S.CollectionContainer>
    </>
  )
}

export default CarCollection
