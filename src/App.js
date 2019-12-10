import React, { useState, Fragment } from 'react'
import AddTravelForm from './forms/AddTravelForm'
import EditTravelForm from './forms/EditTravelForm'
import TravelTable from './tables/TravelTable'

const App = () => {
	const usersData = [
		{ 
			id: 1, 
			driver: 'William Schoeffel', 
			plate: 'AAA-1234', 
			cityDeparture: 'Canoinhas-SC', 
			dateDeparture: '02/12/2019', 
			cityArrival: 'São Paulo-SP',  
			dateArrival: '07/12/2019'  
		}
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ formType, setFormType ] = useState('view')
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setCurrentUser(
			{ 
				id: user.id, 
				driver: user.driver, 
				plate: user.plate,  
				cityDeparture: user.cityDeparture, 
				dateDeparture: user.dateDeparture,
				cityArrival: user.cityArrival,
				dateArrival: user.dateArrival
			})
	}
	if(formType === 'edit') {
		return (
			<div className="container">
				<h1>TPL Transportes - Registro de Viagens</h1>
				<div className="flex-row">
					<div className="flex-large">
						<Fragment>
							<h2>Editar Viagem</h2>
							<EditTravelForm
								currentUser={currentUser}
								updateUser={updateUser}
								setFormType={setFormType}
							/>
						</Fragment>
					</div>
				</div>
			</div>
		)
	}
	if(formType === 'add') {
		return (
			<div className="container">
				<h1>TPL Transportes - Registro de Viagens</h1>
				<div className="flex-row">
					<div className="flex-large">
						<Fragment>
							<h2>Criar Nova Viagem</h2>
							<AddTravelForm addUser={addUser} setFormType={setFormType} />
						</Fragment>
					</div>
				</div>
			</div>
		)
	}
	else {
		return (
			<div className="container">
				<h1>TPL Transportes - Registro de Viagens</h1>
				<div className="flex-row">
					<div className="flex-large">
						<Fragment>
							<h2>Lista de Viagens</h2>
							<button onClick={() => setFormType('add')}>Adicionar</button>
							<TravelTable users={users} editRow={editRow} deleteUser={deleteUser} setFormType={setFormType} />
						</Fragment>
					</div>
				</div>
			</div>
		)
	}
	
}

export default App
