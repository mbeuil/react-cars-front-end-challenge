import * as React from 'react'
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
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    if (!distance || !duration) return
    setTotal(totalPrice(distance, duration, pricePerDay, pricePerKm))
  }, [distance, duration])

  return (
    <S.CarItemContainer>
      <S.BackgroundImage src={picturePath} alt={`${model} book cover`} />
      <S.CarName>
        {brand} {model}
      </S.CarName>

      {!total ? (
        <S.CarPricesContainer>
          <CarPriceCard info="$/day" price={pricePerDay / 100} />
          <CarPriceCard info="$/km" price={pricePerKm / 100} />
        </S.CarPricesContainer>
      ) : (
        <S.CarTotalContainer>
          <CarPriceCard info="total" price={total} variant="total" />
        </S.CarTotalContainer>
      )}
    </S.CarItemContainer>
  )
}

export default React.memo(CarItem)
