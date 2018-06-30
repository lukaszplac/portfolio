import React, { Component } from 'react';
import Card from './Card';
import AuxComp from './AuxComp';
import styles from './CardWrapper.scss';

class CardWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: [false, false, false],
            showFull: [false, false, false],
            hidden: [false, false, false],
			someCardIsOpen: false,
			someCardIsHovered: false,
			clickTip: false,
			tipX: 0,
			tipY: 0
        }
    };

    timeOutFunction(func) {
		this.timeOut = setTimeout(func, 300);
	}

	hideExcept(id) {
		let hiddenTable = this.state.hidden.map((element,i) => {
			if (!element && i===id) {
				return false;
			} else return true;
		});
		this.setState({
			hidden: [...hiddenTable]
		})
	}

	onClickHandler(id) {
		this.hideExcept(id);
		let showFullTabel = [...this.state.showFull];
		showFullTabel[id] = true;
		this.setState({
			showFull: [...showFullTabel],
			someCardIsOpen: true
		})
	}

	onMouseLeaveHandler() {
		clearTimeout(this.timeOut);
		this.setState({
			show: [false, false, false],
			showFull: [false, false, false],
			hidden: [false, false, false],
			someCardIsOpen: false,
			someCardIsHovered: false
		})
	}

	onMouseEnterHandler(id) {
		this.timeOutFunction(
			() => {
				let showTable = [...this.state.show];
				showTable[id] = true;
				this.setState({
				show: [...showTable],
				someCardIsHovered: true
				})
			}
		);
	}

	onMouseOverHandler(e) {
		this.setState({
			tipX: e.clientX,
			tipY: e.clientY
		})
	}

    render() {
		let Content = this.props.elementContent;
		let tip = <div className={styles.cardTip} style={{top: this.state.tipY, left: this.state.tipX}}></div>
		let cardSet = this.props.contentJson.content.map((card,i) => <Card key={i}
																			id={i}
																			offset={(i+1)*10}
																			background={{color: this.props.colors[i]}}
																			zIndex={-100-(i*2)}
																			delay={""+0.2*(i+1)+"s"}
																			onEnter={this.onMouseEnterHandler.bind(this)}
																			onLeave={this.onMouseLeaveHandler.bind(this)}
																			onClick={this.onClickHandler.bind(this)}
																			onMove={this.onMouseOverHandler.bind(this)}
																			show={this.state.show[i]}
																			showFull={this.state.showFull[i]}
																			hidden={this.state.hidden[i]}
																			someCardIsOpen={this.state.someCardIsOpen}>
																			<Content
																				heading={card.heading}
																				text={card.text}
																				iconSet={this.props.icons[i]}/>
																	</Card>)
        return(
            <AuxComp>
				{cardSet}
				{this.state.someCardIsHovered && !this.state.someCardIsOpen ? tip : null}
            </AuxComp>
        );
    };
};

export default CardWrapper;