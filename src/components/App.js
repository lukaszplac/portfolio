import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Navigation from './navigation/Navigation';
import Start from './start/Start';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import styles from './App.scss';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class App extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Route render={({location}) => (
				<div style={styles.app}>
						<Navigation />
						<TransitionGroup>
							<CSSTransition
								key={location.key}
								classNames="fade"
								timeout={1100}>
								<Switch location={location}>
									<Route exact path="/" component={Start}/>
									<Route exact path="/portfolio" component={Portfolio}/>
									<Route exact path="/about" component={About}/>
									<Route exact path="/contact" component={Contact}/>
									<Route render={() => <div>Not Found</div>} />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
				</div>)}/>
			)
	}
}

export default App;