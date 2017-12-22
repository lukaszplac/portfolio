import React from 'react';
import styles from './PanelRight.scss';
import me1 from '../../../../res/img/me-about11.jpg';
import me2 from '../../../../res/img/me-about22.jpg';

class PanelRight extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			unhide: ''
		}
	}

	componentDidMount() {
		setTimeout(() => this.unhide(), this.props.wait);
	}

	unhide() {
		this.setState({unhide: 'unhide'});
	}

	render() {
		return(
			<div className={this.state.unhide ? styles.unhide : styles.images}>
				<img src={me1}></img>
				<img src={me2}></img>
			</div>
			)
	}
}

export default PanelRight;