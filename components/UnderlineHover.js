const UnderlineHover = props => {
	const { color } = props;

	return <div className={`w-full h-1 transform scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out ${color}`}></div>
}

UnderlineHover.defaultProps = {
	color: 'bg-white',
};

export default UnderlineHover;
