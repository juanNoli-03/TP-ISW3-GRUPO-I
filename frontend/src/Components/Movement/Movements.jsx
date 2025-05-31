import Movement from './Movement'
import './Movements.css';

export default function Movements({movements}) {
  return(
    <div className="movements-container">
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
    </div>
  )
}
