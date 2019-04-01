import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import PlayersTableStyle from './PlayersTableStyle';

const PlayersTable = (props) => {

	return (
		<table style={PlayersTableStyle}>
			<thead>
				<tr>
					<th>Player</th>
					<th>Position</th>
					<th>Team</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{props.footballPlayers.map((player) => {
					return (
						<tr key={player.name}>
							<td>{player.name}</td>
							<td>{player.position}</td>
							<td>{player.nationality}</td>
							<td>{player.age}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

PlayersTable.propTypes = {
	footballPlayers: arrayOf(
		shape({
			name: string.isRequired,
			position: string.isRequired,
			nationality: string.isRequired,
			age: number.isRequired
		})
	)
};

export default PlayersTable;
