import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(() => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }
  const handleSaveButton = event => {
    event.preventDefault();
    props.updateUser(user.id, user);
    props.setFormType('view')
  }

  return (
    <form>
      <label>Motorista</label>
			<input type="text" name="driver" value={user.driver} onChange={handleInputChange} />
			<label>Placa</label>
			<input type="text" name="plate" value={user.plate} onChange={handleInputChange} />
			<label>Cidade Partida:</label>
			<input type="text" name="cityDeparture" value={user.cityDeparture} onChange={handleInputChange} />
			<label>Data Partida:</label>
			<input type="text" name="dateDeparture" value={user.dateDeparture} onChange={handleInputChange} />
			<label>Cidade Chegada:</label>
			<input type="text" name="cityArrival" value={user.cityArrival} onChange={handleInputChange} />
			<label>Previsão de Chegada:</label>
			<input type="text" name="dateArrival" value={user.dateArrival} onChange={handleInputChange} />
      <button onClick={handleSaveButton}>Atualizar Viagem</button>
      <button onClick={() => props.setFormType('view')} className="button muted-button">
        Cancelar
      </button>
    </form>
  )
}

export default EditUserForm
