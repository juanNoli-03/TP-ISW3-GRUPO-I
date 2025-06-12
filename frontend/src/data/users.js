//Usuarios registrados:
export let users = [
  { id: 1, name: 'Malena Gutiérrez', email: 'malenagutierrez@example.com', password: '1234', dni: 11111111, celular: 1109092134 },
  { id: 2, name: 'Gonzalo López', email: 'gonzalolopez@example.com', password: '1234', dni: 22222222, celular: 1155789921 },
  { id: 3, name: 'Leandro García', email: 'leandrogarcia@example.com', password: '1234', dni: 33333333, celular: 1198761234 },
  { id: 4, name: 'Micaela Cáceres', email: 'micaelacaceres@example.com', password: '1234', dni: 44444444, celular: 1112349876 },
  { id: 5, name: 'Paula Velázquez', email: 'paulavelazquez@example.com', password: '1234', dni: 55555555,celular: 1199873421 },
]

export function findById(id) {
  return users.find(user => user.id === Number(id));
}
export function addUser (user) {
  const newId = users.length ? users[users.length - 1].id + 1 : 1
  users.push({ id: newId, ...user})
  return newId;  
  }
