import React from "react";

const span = Array(18)
	.fill()
	.map((it, i) => {
		return (it = <span style={{ ["--i"]: i + 1 }} key={i}></span>);
	});

const Loader = () => {
	return (
		<>
			<div className='loader loader2'>
				{span}
				<div className='plane'></div>
			</div>
			<p className='loader-text'>Loading Tickets...</p>
		</>
	);
};
export { Loader };
