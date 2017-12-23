import React from 'react';
import styles from './Apps.scss';

class Apps extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			hidden: 'hidden'
		}
	}

	componentDidMount() {
		setTimeout(() => this.unhide(), this.props.wait);
	}

	unhide() {
		this.setState({hidden: ''});
	}

	render() {
    let appsArrayParsedToDomElements = this.props.apps.map((item, i) => (
      <div key={i+1122} className={this.state.hidden ? styles.hidden : this.props.anim + ' ' + styles.notHidden}>
         <p>{item.title}</p>
         <p>{item.description}</p>
         <p>{item.webLink}</p>
         <p>{item.sourceLink}</p>
      </div>
    ));
		return(
			<div>
				{appsArrayParsedToDomElements}
			</div>
			)
	}
}

export default Apps;
