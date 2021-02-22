/**
 * Car Item's type
 **/

export interface CarItemProps {
  id?: number
  distance?: string
  duration?: string
  picturePath: string
  brand: string
  model: string
  pricePerDay: number
  pricePerKm: number
  availability: {
    maxDuration: number
    maxDistance: number
  }
}
