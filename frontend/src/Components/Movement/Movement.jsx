export default function Movement({movement}) {
  return(
    <tr>
      <td>{movement.date} {movement.time}</td>
      <td>{movement.type}</td>
      <td>{movement.description}</td>
      <td>{movement.price}</td>
    </tr>
  )
}