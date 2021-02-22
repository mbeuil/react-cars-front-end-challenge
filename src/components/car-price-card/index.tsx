import * as React from 'react'
import * as S from './styles'

type CarPricsCardProps = {
  info: string
  price: number
  variant?: string
}

function CarPriceCard({info, price, variant}: CarPricsCardProps) {
  return (
    <S.CarPricesCard>
      <S.CarPriceInfo>{info}</S.CarPriceInfo>
      <S.CarPricePer theme={variant}>{price}$</S.CarPricePer>
    </S.CarPricesCard>
  )
}

export default CarPriceCard
