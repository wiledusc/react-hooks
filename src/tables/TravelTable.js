import React from 'react'

const TravelTable = props => (
  <table>
    <thead>
      <tr>
        <th>Motorista</th>
        <th>Placa</th>
        <th>Cidade Partida</th>
        <th>Data Partida</th>
        <th>Cidade Chegada</th>
        <th>Previsão Chegada</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.driver}</td>
            <td>{user.plate}</td>
            <td>{user.cityDeparture}</td>
            <td>{user.dateDeparture}</td>
            <td>{user.cityArrival}</td>
            <td>{user.dateArrival}</td>
            <td>
              <button
                onClick={() => {
                  props.setFormType('edit');
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Excluir
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8}>Sem Registros</td>
        </tr>
      )}
    </tbody>
  </table>

)

export default TravelTable
