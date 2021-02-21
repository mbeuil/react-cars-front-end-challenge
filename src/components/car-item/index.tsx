/**@jsx jsx */
import {jsx} from '@emotion/react'
import {useTheme} from '../../hooks/use-theme'
import * as T from '../../types/types'
import * as S from './styles'

function CarItem({
  brand,
  picturePath,
  model,
  pricePerDay,
  pricePerKm,
}: T.CarItemProps) {
  const {dark} = useTheme()

  return (
    <S.CarItemContainer theme={dark}>
      <S.BackgroundImage src={picturePath} alt={`${model} book cover`} />
      <S.CarName theme={dark}>
        {brand} {model}
      </S.CarName>
      <S.CarPricesContainer>
        <S.CarPricesCard>
          <S.CarPriceInfo theme={dark}>$/day</S.CarPriceInfo>
          <S.CarPricePer theme={dark}>{pricePerDay / 100}$</S.CarPricePer>
        </S.CarPricesCard>
        <S.CarPricesCard>
          <S.CarPriceInfo theme={dark}>$/km</S.CarPriceInfo>
          <S.CarPricePer theme={dark}>{pricePerKm / 100}$</S.CarPricePer>
        </S.CarPricesCard>
      </S.CarPricesContainer>
    </S.CarItemContainer>
  )
}

export default CarItem
