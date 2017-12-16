import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Start from './start/Start';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import PageWrapper from './PageWrapper';

class App extends Component {
	

	render() {
		return (
			<Router>
				<div>
					<Navigation/>
					<Route exact path={'/'} component={PageWrapper(Start)}/>
					<Route path={'/portfolio'} component={PageWrapper(Portfolio)}/>
					<Route path={'/about'} component={PageWrapper(About)}/>
					<Route path={'/contact'} component={PageWrapper(Contact)}/>
				</div>
			</Router>
			)
	}
}

export default App;