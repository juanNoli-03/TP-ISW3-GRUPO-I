import Movement from './Movement'

export default function Movements({movements}) {
  return(
    <>
      <h3>Movimientos</h3>
      <table>
        <thead>
          <tr>
            <th>Fecha y hora</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((item) => (
            <Movement key={item.id} movement={item}/>
          ))}
        </tbody>
      </table>
    </>
  )
}
