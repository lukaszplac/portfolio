import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import styles from './index.scss';

ReactDOM.render(
	<Router>
		<App />
	</Router>, document.getElementById('app'))
