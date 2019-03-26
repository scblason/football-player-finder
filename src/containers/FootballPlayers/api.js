import moment from 'moment';

const getAgeFromBirth = (dateBirth) => moment().diff(dateBirth, 'years');

const mapFootbalPlayers = (data) => {
	return data.map((item) => {
		return {
			name: item.name,
			position: item.position,
			nationality: item.nationality,
			age: getAgeFromBirth(item.dateOfBirth)
		};
	});
};

export const apiGetFootbalPlayers = () => {
	return fetch('https://football-players-b31f2.firebaseio.com/players.json').then((response) => {
		return response.ok ? response.json() : null;
	}).then((res) => {
        if(res) {
            return mapFootbalPlayers(res);
        } 
        return null;
    });
};
