const SitenameStyle = {
	justifySelf: 'flex-start',
	textAlign: 'center',
	backgroundColor: '#3646a0',
	padding: '2px 0 2px 10px'
};

const Sitename = ({ children }) => {
	return <div style={SitenameStyle}>{children}</div>;
};

export default Sitename;