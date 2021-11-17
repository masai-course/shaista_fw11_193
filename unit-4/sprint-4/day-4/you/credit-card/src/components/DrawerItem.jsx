import React from 'react';

const DrawerItemStyle = {
	fontSize: '18px',
	textTransform: 'capitalize',
	color: 'white',
	marginRight: '1rem',
	listStyle: 'none',
	justifySelf: 'flex-end'
};

const DrawerItem = ({ label }) => {
	return <li style={DrawerItemStyle}>{label}</li>;
};

export default DrawerItem;