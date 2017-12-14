import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Navigation from './navigation/Navigation';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Navigation}>
					<Route path='/portfolio' component={Portfolio}/>
					<Route path='/about' component={About}/>
					<Route path='/contact' component={Contact}/>
				</Route>
			</Router>
			)
	}
}

export default App;