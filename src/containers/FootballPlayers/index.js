import React, { Component } from 'react';
import { connect } from 'react-redux';
import { arrayOf, object } from 'prop-types';
import { getFootballPlayers } from './actions';
import { filteredFootballPlayers } from './selectors';
import PlayersFilter from '../PlayersFilter';
import PlayersTable from './components/PlayersTable';
import TitleBar from './components/TitleBar';

const style = { marginTop: 20 };

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
		const { fetching } = this.props;
		return (
			<div className="container" style={style}>
				<div className="row">
					<div className="twelve columns">
						<TitleBar>Football Player Finder</TitleBar>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<PlayersFilter />
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						{fetching ? (
							<h4> Loading... </h4>
						) : (
							<PlayersTable footballPlayers={this.props.footballPlayers} />
						)}
					</div>
				</div>
			</div>
		);
	}
}

App.propTypes = {
	footballPlayers: arrayOf(object)
};

const mapStateToProps = (state) => ({
	footballPlayers: filteredFootballPlayers(state),
	fetching: state.footballPlayers.fetching
});

export default connect(mapStateToProps, { getFootballPlayers })(App);
