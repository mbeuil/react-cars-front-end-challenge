import * as React from 'react'
import useAsync from '../../hooks/use-async'
import * as T from '../../types/types'
import {totalPrice} from '../../utils/number'
import CarPriceCard from '../car-price-card'
import * as S from './styles'

function CarItem({
  brand,
  picturePath,
  model,
  pricePerDay,
  pricePerKm,
  distance,
  duration,
}: T.CarItemProps) {
  const {isSuccess, data, run, reset} = useAsync()

  React.useEffect(() => {
    if (!distance || !duration) return
    run(totalPrice(distance, duration, pricePerDay, pricePerKm))
    return () => reset()
  }, [distance, duration, run])

  return (
    <S.CarItemContainer>
      <S.BackgroundImage src={picturePath} alt={`${model} book cover`} />
      <S.CarName>
        {brand} {model}
      </S.CarName>

      {!isSuccess ? (
        <S.CarPricesContainer>
          <CarPriceCard info="$/day" price={pricePerDay / 100} />
          <CarPriceCard info="$/km" price={pricePerKm / 100} />
        </S.CarPricesContainer>
      ) : typeof data === 'number' ? (
        <S.CarTotalContainer>
          <CarPriceCard
            info="total"
            price={data}
            variant="total"
            duration={duration}
          />
        </S.CarTotalContainer>
      ) : null}
    </S.CarItemContainer>
  )
}

export default React.memo(CarItem)
