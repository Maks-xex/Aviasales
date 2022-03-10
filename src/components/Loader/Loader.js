import React from "react";

const span = Array(18)
	.fill()
	.map((_, i) => <span style={{ "--i": i + 1 }} key={i}></span>);

export const Loader = () => (
	<>
		<div className='loader loader2'>
			{span}
			<div className='plane'></div>
		</div>
		<p className='loader-text'>Loading Tickets...</p>
	</>
);
