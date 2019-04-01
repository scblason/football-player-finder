import React from 'react';
import TitleBarStyle from './TitleBarStyle';

const TitleBar = (props) => {
	return (
		<span style={TitleBarStyle}>{props.children}</span>
	);
};


export default TitleBar;
