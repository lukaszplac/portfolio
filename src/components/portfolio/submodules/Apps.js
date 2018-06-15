import React from 'react';
import styles from './Apps.scss';
import { StatefulToolTip } from "react-portal-tooltip"
import * as Fa from 'react-icons/lib/fa';

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
		let tStyle = {
      style: {
        background: '#ff1a6a',
        padding: '10px',
        boxShadow: '5px 5px 3px rgba(0,0,0,.5)',
				borderRadius: '15px'
      },
      arrowStyle: {
        color: 'rgba(0,0,0,.8)',
        borderColor: true
      }
    }
    let appsArrayParsedToDomElements = this.props.apps.map((item, i) => {
								let backgroundImage = require('../../../../res/img/appsbg/' + item.bgName);
								let tooltipDiv = (<div className={styles.appContentContainer}>
																					 <a href={item.webLink} target="_blank"><Fa.FaEye size='32' /></a>
																					 <a href={item.sourceLink} target="_blank"><Fa.FaGithub size='32' /></a>
																  </div>);
								let viewWidth = document.documentElement.clientWidth;
								let position = "bottom";
								let arrow = "center";
								if (viewWidth >= 753) {
											position = "right";
											arrow = "bottom";
									}
								return (
									<div
										key={i+1122}
										className={styles.appContainer}>
										<img src={backgroundImage}></img>
										<StatefulToolTip position={position}
																		 arrow={arrow}
																		 parent={tooltipDiv}
																		 style={tStyle}>
													<div className={styles.tooltip}>
														<h4 className={styles.tooltipTitle}>{item.title}</h4>
														<p className={styles.tooltipDescr}>{item.description}</p>
													</div>
										</StatefulToolTip>
									</div> )
						    });
		return(
			<div className={this.state.hidden ? styles.hidden : this.props.anim + ' ' + styles.notHidden}>
				{appsArrayParsedToDomElements}
			</div>
			)
	}
}

export default Apps;
