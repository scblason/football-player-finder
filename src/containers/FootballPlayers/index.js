import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { getFootballPlayers } from './actions';
import { filteredFootballPlayers } from './selectors';
import PlayersFilter from '../PlayersFilter';
import PlayersTable from '../../components/PlayersTable';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filterName: '',
			filterAge: '',
			filterPosition: ''
		};
	}

	componentDidMount() {
		this.props.getFootballPlayers();
	}

	render() {
		return (
			<div className="container" style={{marginTop: 20}}>
				<div className="row">
					<div className="twelve columns">
						<span style={{fontSize: 30}}>Football Player Finder</span>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<PlayersFilter />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<PlayersTable footballPlayers={this.props.footballPlayers} />
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	footballPlayers: arrayOf(object)
};

const mapStateToProps = (state) => ({ footballPlayers: filteredFootballPlayers(state) });

export default connect(mapStateToProps, { getFootballPlayers })(App);
