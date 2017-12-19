import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Start from './start/Start';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import styles from './App.scss';
import './helpers/PageWrapper.css'
import PageWrapper from './helpers/PageWrapper';

class App extends Component {
	
	render() {
		return (
				<div>
						<Navigation />
						<Route location={location} key={'1'} path="/" exact component={PageWrapper(Start)}/>
						<Route location={location} key={'2'} path="/portfolio" exact component={PageWrapper(Portfolio)}/>
						<Route location={location} key={'3'} path="/about" exact component={PageWrapper(About)}/>
						<Route location={location} key={'4'} path="/contact" exact component={PageWrapper(Contact)}/>
				</div>
			)
	}
}

export default App;