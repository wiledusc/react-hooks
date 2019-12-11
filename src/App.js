import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TravelList from './forms/TravelList'
import CheckList from './forms/CheckList';
import Home from './forms/Home';

const App = () => {

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/checklist" component={CheckList} />
					<Route path="/travellist" component={TravelList} />
					<Route path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	)
		
}

export default App
