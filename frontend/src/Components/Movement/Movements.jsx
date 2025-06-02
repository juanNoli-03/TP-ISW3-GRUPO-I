import { useState } from 'react';
import Movement from './Movement'
import { getFilteredTransactions } from '../../data/transactions';
import './Movements.css';

export default function Movements({ cardId }) {
  const [sinceDate, setSinceDate] = useState('')
  const [untilDate, setUntilDate] = useState('')
  const [type, setType] = useState('')
  const [movements, setMovements] = useState(getFilteredTransactions(cardId, '', '', ''))

  //Manejador de solicitud de filtrado de los movimientos de la tarjeta:
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = getFilteredTransactions(cardId, sinceDate, untilDate, type);
    setMovements(result);
  };

  return(
    <div className="movements-container">
      <h3>Movimientos</h3>
      <form className="form-filtros" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="sinceDate">Fecha desde</label>
          <input
            id="sinceDate"
            type="date"
            value={sinceDate}
            onChange={(e) => setSinceDate(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="untilDate">Fecha hasta</label>
          <input
            id="untilDate"
            type="date"
            value={untilDate}
            onChange={(e) => setUntilDate(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="type">Tipo de movimiento</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Carga de saldo">Carga de saldo</option>
            <option value="Colectivo">Colectivo</option>
            <option value="Subte">Subte</option>
            <option value="Tren">Tren</option>
          </select>
        </div>
        <button type="submit" className="btn-buscar">Buscar</button>
      </form>
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
          {movements.length === 0 ? (
            <tr className='fila-vacia'>
              <td colSpan="4" className="sin-movimientos">
                No hay movimientos disponibles
              </td>
            </tr>
          ) : (
            movements.map((item) => (
              <Movement key={item.id} movement={item} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}