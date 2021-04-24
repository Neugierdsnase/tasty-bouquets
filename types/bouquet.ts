export type Tag = 'VEGAN' | 'VEGETARIAN' | 'GLUTENFREE' | 'LACTOSEFREE'

export type Bouquet = {
  [key: string]: string | number | Tag[]
  name: string
  descriptionShort: string
  descriptionLong: string
  price: number
  targetAudience: string
  tags?: Tag[]
}