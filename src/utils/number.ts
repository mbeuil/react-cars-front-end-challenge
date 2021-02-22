export async function totalPrice(
  distance: string,
  duration: string,
  pricePerDay: number,
  pricePerKm: number,
) {
  return (
    parseInt(distance) * (pricePerKm / 100) +
    parseInt(duration) * (pricePerDay / 100)
  )
}

export function salePrice(price: number, duration: string) {
  const d = parseInt(duration)

  if (d > 10)
    return {totalPrice: Math.ceil(price * 0.5), fullPrice: Math.ceil(price)}
  if (d > 4)
    return {totalPrice: Math.ceil(price * 0.7), fullPrice: Math.ceil(price)}
  if (d > 1)
    return {totalPrice: Math.ceil(price * 0.9), fullPrice: Math.ceil(price)}
  return {totalPrice: Math.ceil(price), fullPrice: 0}
}
