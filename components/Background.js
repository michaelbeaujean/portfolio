import Sticker from './Sticker';

const Background = () => {
	return (
		<div style={{ top: '80px' }}>
			<div className="flex justify-between align-middle" style={{ height: '100vh'}}>
				<Sticker color="mint" width="1/6" height="80" pos="center" />
				{/* <Sticker color="baige" width="1/3" height="1/3" pos="end" /> */}
			</div>
			
			<div className="flex justify-between" style={{ height: '100vh'}}>
				{/* <Sticker color="cherry" />
				<Sticker color="baige" /> */}
			</div>

			<div className="flex justify-between" style={{ height: '100vh'}}>
				{/* <Sticker color="mint" />
				<Sticker color="baige" /> */}
			</div>
		</div>
	)
}

export default Background;
