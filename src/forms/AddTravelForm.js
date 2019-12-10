import React, { useState } from 'react'

const AddTravelForm = props => {
	const initialFormState = { id: null, driver: '', plate: '', cityDeparture: '', dateDeparture: '', cityArrival: '', dateArrival: ''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value} = event.target
		setUser({ ...user, [name]: value })
	}
	const handleSaveButton = event => {
		event.preventDefault()
		if (!user.driver || !user.plate){
			alert('Campo Motorista ou Placa em branco!');
			return;
		} 

		props.addUser(user);
		props.setFormType('view');
		setUser(initialFormState);
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
			<button onClick={handleSaveButton}>Salvar Viagem</button>
			<button className="button muted-button" onClick={() => props.setFormType('view')} >Cancelar</button>
		</form>
	)
}

export default AddTravelForm
