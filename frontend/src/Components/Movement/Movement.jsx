export default function Movement({movement}) {
  //Inicializamos las variables con el caso de que sea una carga de saldo:
  let valorClass = 'valor-ingreso'
  let priceToShow = '$' + movement.price

  //En caso de que no sea una carga de saldo, es decir, un viaje:
  if(movement.type !== 'Carga de saldo'){
    valorClass = 'valor-gasto'
    priceToShow = '-' + priceToShow
  }

  return(
    <tr>
      <td>{movement.date} {movement.time}</td>
      <td>{movement.type}</td>
      <td>{movement.description}</td>
      <td className={valorClass}>{priceToShow}</td>
    </tr>
  )
}