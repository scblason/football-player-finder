import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterFootballPlayers } from './actions';
import { func } from 'prop-types';
import { playersFilterSelector } from './selectors';

export const POSITIONS_SELECT = [
	'Position',
	'Attacking Midfield',
	'Central Midfield',
	'Centre-Back',
	'Centre-Forward',
	'Defensive Midfield',
	'Keeper',
	'Left Midfield',
	'Left Wing',
	'Left-Back',
	'Right-Back'
];

class PlayersFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterName: '',
			filterAge: '',
			filterPosition: ''
		};
	}

	handlePosition = (e) => {
		this.setState({ filterPosition: e.target.value === 'Position' ? '' : e.target.value });
	};

	handleAge = (e) => {
		this.setState({ filterAge: e.target.value });
	};

	handleName = (e) => {
		this.setState({ filterName: e.target.value });
	};

	handleSearch = () => {
		const { filterName, filterPosition, filterAge } = this.state;
		this.props.filterFootballPlayers({ filterName, filterPosition, filterAge });
	};

	render() {
		const { filterName, filterPosition, filterAge } = this.state;

		return (
			<div style={{marginTop: 20 }}>
				<div className="container" style={{width: '100%'}}>
					<div className="row">
						<div className="three columns">
							<input
								name="filterName"
								onChange={this.handleName}
								value={filterName}
								className="u-full-width"
								type="text"
								placeholder="Player name"
								id="nameInput"
							/>
						</div>
						<div className="three columns">
							<select
								onChange={this.handlePosition}
								value={filterPosition}
								className="u-full-width"
								id="positionSelect"
							>
								{POSITIONS_SELECT.map((item) => {
									return (
										<option value={item} key={item}>
											{item}
										</option>
									);
								})}
							</select>
						</div>
						<div className="three columns">
							<input
								min={18}
								max={40}
								onChange={this.handleAge}
								value={filterAge}
								className="u-full-width"
								type="number"
								placeholder="Age"
								id="ageInput"
							/>
						</div>
						<div className="three columns">
							<input
								className="button-primary"
								type="button"
								value="Search"
								onClick={this.handleSearch}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

PlayersFilter.propTypes = {
	filterFootballPlayers: func.isRequired
};

const mapStateToProps = (state) => ({ filters: playersFilterSelector(state) });

export default connect(mapStateToProps, { filterFootballPlayers })(PlayersFilter);
