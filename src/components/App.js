import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Start from './start/Start';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import styles from './App.scss';

class App extends Component {
	
	render() {
		return (
				<div>
					<Navigation />
					<Route key={'1'} path="/" exact component={Start}/>
					<Route key={'2'} path="/portfolio" exact component={Portfolio}/>
					<Route key={'3'} path="/about" exact component={About}/>
					<Route key={'4'} path="/contact" exact component={Contact}/>
				</div>
			)
	}
}

export default App;