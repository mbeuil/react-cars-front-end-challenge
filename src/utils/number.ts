export function totalPrice(
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
