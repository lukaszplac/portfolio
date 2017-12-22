import React from 'react';
import styles from './PanelLeft.scss';
import Paragraph from './Paragraph';

class PanelLeft extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			hidden: 'hidden',
			animations: ['animated fadeInLeft',
						 'animated fadeInRight',
						 'animated rollIn',
						 'animated fadeInDown',
						 'animated fadeInUp']
		}
	}

	componentDidMount() {
		setTimeout(() => this.show(), this.props.wait);
	}

	show() {
		this.setState({hidden: ''});
	}

	render() {
		let paragraphsArray = [];
		let keys = Object.keys(this.props);
		for (let i = 2; i < keys.length; i++) {
			if (keys[i].includes('text')) {
				let randomAnimation = Math.floor(Math.random() * (this.state.animations.length));
				console.log(keys[i]);
				console.log(randomAnimation);
				paragraphsArray.push(
				<Paragraph key={i*100} 
						   wait={this.props.wait+700+i*100} 
						   anim={this.state.animations[randomAnimation]} 
						   text={this.props[keys[i]]}/>
				)
			}
		}
		return(
			<div key={this.props.number} className={styles.content}>
				<h4 className={this.state.hidden ? styles.hidden : 'animated '+ this.props.anim + ' ' + styles.notHidden}>{this.props.title}</h4>
				{paragraphsArray}		
			</div>
			)
	}
}

export default PanelLeft;