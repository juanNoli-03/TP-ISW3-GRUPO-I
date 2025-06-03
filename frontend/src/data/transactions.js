//Transacciones registradas:
export let transactions = [
  { id: 1, date: '2025-04-01', time: '06:30:00', type: 'Colectivo', description: 'Línea 60 Interno 12', price: 340, cardId: 1 },
  { id: 2, date: '2025-04-01', time: '08:00:00', type: 'Subte', description: 'Línea B Est. Medrano', price: 410, cardId: 4 },
  { id: 3, date: '2025-04-01', time: '18:15:00', type: 'Colectivo', description: 'Línea 39 Interno 8', price: 370, cardId: 2 },
  { id: 4, date: '2025-04-02', time: '07:00:00', type: 'Tren', description: 'Línea Mitre Ramal Tigre', price: 550, cardId: 3 },
  { id: 5, date: '2025-04-02', time: '08:45:00', type: 'Subte', description: 'Línea D Est. Catedral', price: 460, cardId: 1 },
  { id: 6, date: '2025-04-02', time: '17:30:00', type: 'Colectivo', description: 'Línea 111 Interno 3', price: 520, cardId: 5 },
  { id: 7, date: '2025-04-03', time: '07:10:00', type: 'Tren', description: 'Línea Roca Constitución', price: 630, cardId: 2 },
  { id: 8, date: '2025-04-03', time: '09:00:00', type: 'Colectivo', description: 'Línea 15 Interno 18', price: 390, cardId: 1 },
  { id: 9, date: '2025-04-03', time: '19:30:00', type: 'Subte', description: 'Línea A Est. San Pedrito', price: 475, cardId: 3 },
  { id: 10, date: '2025-04-04', time: '06:45:00', type: 'Colectivo', description: 'Línea 68 Interno 22', price: 360, cardId: 3 },
  { id: 11, date: '2025-04-04', time: '08:20:00', type: 'Tren', description: 'Línea Sarmiento Once', price: 710, cardId: 3 },
  { id: 12, date: '2025-04-04', time: '18:00:00', type: 'Colectivo', description: 'Línea 95 Interno 5', price: 320, cardId: 1 },
  { id: 13, date: '2025-04-05', time: '07:25:00', type: 'Subte', description: 'Línea E Est. Bolívar', price: 490, cardId: 2 },
  { id: 14, date: '2025-04-05', time: '08:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 1000, cardId: 4 },
  { id: 15, date: '2025-04-05', time: '09:15:00', type: 'Colectivo', description: 'Línea 93 Interno 4', price: 310, cardId: 4 },
  { id: 16, date: '2025-04-05', time: '20:10:00', type: 'Tren', description: 'Línea Urquiza Federico Lacroze', price: 590, cardId: 5 },
  { id: 17, date: '2025-04-06', time: '06:50:00', type: 'Colectivo', description: 'Línea 76 Interno 17', price: 330, cardId: 2 },
  { id: 18, date: '2025-04-06', time: '07:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 2000, cardId: 1 },
  { id: 19, date: '2025-04-06', time: '08:30:00', type: 'Subte', description: 'Línea H Est. Las Heras', price: 440, cardId: 3 },
  { id: 20, date: '2025-04-06', time: '18:45:00', type: 'Colectivo', description: 'Línea 29 Interno 13', price: 310, cardId: 4 },
  { id: 21, date: '2025-04-06', time: '21:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 3000, cardId: 2 },
  { id: 22, date: '2025-04-07', time: '07:00:00', type: 'Tren', description: 'Línea San Martín Retiro', price: 760, cardId: 3 },
  { id: 23, date: '2025-04-07', time: '09:10:00', type: 'Colectivo', description: 'Línea 21 Interno 9', price: 410, cardId: 1 },
  { id: 24, date: '2025-04-07', time: '17:00:00', type: 'Subte', description: 'Línea C Est. Constitución', price: 460, cardId: 2 },
  { id: 25, date: '2025-04-07', time: '17:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 1500, cardId: 5 },
  { id: 26, date: '2025-04-08', time: '07:15:00', type: 'Colectivo', description: 'Línea 5 Interno 10', price: 300, cardId: 1 },
  { id: 27, date: '2025-04-08', time: '08:55:00', type: 'Subte', description: 'Línea D Est. Olleros', price: 490, cardId: 3 },
  { id: 28, date: '2025-04-08', time: '18:20:00', type: 'Colectivo', description: 'Línea 25 Interno 6', price: 365, cardId: 5 },
  { id: 29, date: '2025-04-09', time: '06:40:00', type: 'Tren', description: 'Línea Belgrano Sur Sáenz', price: 645, cardId: 5 },
  { id: 30, date: '2025-04-09', time: '09:30:00', type: 'Subte', description: 'Línea E Est. Jujuy', price: 470, cardId: 3 },
  { id: 31, date: '2025-04-09', time: '20:00:00', type: 'Colectivo', description: 'Línea 80 Interno 11', price: 390, cardId: 3 },
  { id: 32, date: '2025-04-10', time: '06:55:00', type: 'Colectivo', description: 'Línea 115 Interno 19', price: 370, cardId: 2 },
  { id: 33, date: '2025-04-10', time: '08:10:00', type: 'Tren', description: 'Línea Roca Bosques', price: 610, cardId: 4 },
  { id: 34, date: '2025-04-10', time: '17:15:00', type: 'Colectivo', description: 'Línea 105 Interno 2', price: 335, cardId: 2 },
  { id: 35, date: '2025-04-11', time: '07:40:00', type: 'Subte', description: 'Línea A Est. Plaza de Mayo', price: 455, cardId: 2 },
  { id: 36, date: '2025-04-11', time: '09:25:00', type: 'Colectivo', description: 'Línea 152 Interno 7', price: 385, cardId: 3 },
  { id: 37, date: '2025-04-11', time: '12:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 5000, cardId: 3 },
  { id: 38, date: '2025-04-11', time: '19:10:00', type: 'Tren', description: 'Línea Mitre Ramal Suárez', price: 700, cardId: 1 },
  { id: 39, date: '2025-04-12', time: '06:35:00', type: 'Colectivo', description: 'Línea 65 Interno 14', price: 345, cardId: 1 },
  { id: 40, date: '2025-04-12', time: '08:20:00', type: 'Subte', description: 'Línea C Est. Diagonal Norte', price: 430, cardId: 1 },
  { id: 41, date: '2025-04-12', time: '17:50:00', type: 'Colectivo', description: 'Línea 24 Interno 6', price: 350, cardId: 2 },
  { id: 42, date: '2025-04-13', time: '07:05:00', type: 'Tren', description: 'Línea Urquiza Lynch', price: 580, cardId: 3 },
  { id: 43, date: '2025-04-13', time: '09:00:00', type: 'Colectivo', description: 'Línea 47 Interno 5', price: 365, cardId: 4 },
  { id: 44, date: '2025-04-13', time: '20:30:00', type: 'Subte', description: 'Línea B Est. Uruguay', price: 480, cardId: 4 },
  { id: 45, date: '2025-04-13', time: '20:45:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 2000, cardId: 4 },
  { id: 46, date: '2025-04-14', time: '06:25:00', type: 'Colectivo', description: 'Línea 150 Interno 1', price: 370, cardId: 5 },
  { id: 47, date: '2025-04-14', time: '08:05:00', type: 'Tren', description: 'Línea Sarmiento Moreno', price: 765, cardId: 2 },
  { id: 48, date: '2025-04-14', time: '18:10:00', type: 'Colectivo', description: 'Línea 109 Interno 12', price: 390, cardId: 1 },
  { id: 49, date: '2025-04-15', time: '6:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 1200, cardId: 1 },
  { id: 50, date: '2025-04-15', time: '07:20:00', type: 'Subte', description: 'Línea H Est. Hospitales', price: 445, cardId: 5 },
  { id: 51, date: '2025-04-15', time: '09:40:00', type: 'Colectivo', description: 'Línea 90 Interno 15', price: 320, cardId: 5 },
  { id: 52, date: '2025-04-15', time: '13:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 2500, cardId: 2 },
  { id: 53, date: '2025-04-15', time: '19:00:00', type: 'Tren', description: 'Línea Belgrano Norte Aristóbulo del Valle', price: 675, cardId: 1 },
  { id: 54, date: '2025-04-16', time: '06:15:00', type: 'Colectivo', description: 'Línea 70 Interno 8', price: 360, cardId: 2 },
  { id: 55, date: '2025-04-16', time: '08:15:00', type: 'Subte', description: 'Línea E Est. Plaza de los Virreyes', price: 420, cardId: 4 },
  { id: 56, date: '2025-04-16', time: '09:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 500, cardId: 3 },
  { id: 57, date: '2025-04-16', time: '18:40:00', type: 'Colectivo', description: 'Línea 140 Interno 21', price: 340, cardId: 4 },
  { id: 58, date: '2025-04-16', time: '19:15:00', type: 'Carga de saldo', description: 'Carga de saldo mediante aplicación', price: 1000, cardId: 5 },
  { id: 59, date: '2025-04-17', time: '07:30:00', type: 'Tren', description: 'Línea Roca Temperley', price: 695, cardId: 3 },
  { id: 60, date: '2025-04-17', time: '10:00:00', type: 'Colectivo', description: 'Línea 87 Interno 6', price: 360, cardId: 5 },
]

//Agregar transacción:
export const addTransaction = (transaction) => {
  const newId = transactions.length ? transactions[transactions.length - 1].id + 1 : 1
  transactions.push({ id: newId, ...transaction })
}

//Transacciones de una tarjeta específica:
export const getCardTransactions = (cardId) => transactions.filter((transaction) => transaction.cardId === cardId)

//Ordenar transacciones de forma descendente por fecha y hora:
export const orderTransactionsByDateTimeDesc = (transactions) => 
  transactions.sort((a, b) => {
    const dateTimeA = new Date(`${a.date}T${a.time}`);
    const dateTimeB = new Date(`${b.date}T${b.time}`);
    return dateTimeB - dateTimeA;
  })

//Filtrar transacciones:
export const getFilteredTransactions = (cardId, sinceDate, untilDate, type) => {
  //Obtenemos las transacciones de la tarjeta y nos quedamos con las que cumplan los filtros:
  const result = getCardTransactions(cardId).filter((transaction) =>
    (sinceDate === '' || transaction.date >= sinceDate) &&
    (untilDate === '' || transaction.date <= untilDate) &&
    (type === '' || transaction.type === type)
  )

  orderTransactionsByDateTimeDesc(result) //Ordenamos de forma descendente por fecha y hora las transacciones.

  return result;
}