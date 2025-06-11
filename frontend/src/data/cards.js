//Tarjetas registradas:
export let cards = [
  { id: 1, number: 1, balance: 2930, activated: true, userId: 1 },
  { id: 2, number: 2, balance: 7381, activated: true, userId: 2 },
  { id: 3, number: 3, balance: 1845, activated: true, userId: 3 },
  { id: 4, number: 4, balance: 2819, activated: true, userId: 4 },
  { id: 5, number: 5, balance: 4828, activated: true, userId: 5 }
]


export const addCard = (card) => {
  const newId = cards.length ? cards[cards.length - 1].id + 1 : 1
  cards.push({ id: newId, ...card })
}