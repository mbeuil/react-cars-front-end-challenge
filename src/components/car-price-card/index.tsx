import * as React from 'react'
import {salePrice} from '../../utils/number'
import * as S from './styles'

type CarPricsCardProps = {
  info: string
  price: number
  variant?: string
  duration?: string
}

function CarPriceCard({
  info,
  price,
  variant,
  duration = '',
}: CarPricsCardProps) {
  const [{totalPrice, fullPrice}, setPrices] = React.useState({
    totalPrice: price,
    fullPrice: 0,
  })

  React.useEffect(() => {
    setPrices(salePrice(price, duration))
  }, [])

  return (
    <S.CarPricesCard>
      <S.CarPriceInfo>{info}</S.CarPriceInfo>
      {fullPrice ? <S.CarOldPrice>{fullPrice}$</S.CarOldPrice> : null}
      <S.CarPricePer theme={variant}>{totalPrice}$</S.CarPricePer>
    </S.CarPricesCard>
  )
}

export default CarPriceCard
