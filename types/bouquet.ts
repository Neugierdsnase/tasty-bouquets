export type Tag = 'VEGAN' | 'VEGETARIAN' | 'GLUTENFREE' | 'LACTOSEFREE'

export type Bouquet = {
  name: string
  description: {
    short: string
    long: string
  }
  price: number
  targetAudience: string
  tags?: Tag[]
}