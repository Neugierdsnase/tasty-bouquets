import { Bouquet } from "./types/bouquet";

export const mockBouquet: Bouquet = {
  name: 'Not a real bouquet',
  description: {
    short: 'This bouquet is the best one ever.',
    long: 'When you are told which one is the best bouquet of all of the tasty bouquets you will probably say that it is this one.'
  },
  price: 99.9,
  targetAudience: 'alle',
  tags: ['VEGAN', 'LACTOSEFREE']
}