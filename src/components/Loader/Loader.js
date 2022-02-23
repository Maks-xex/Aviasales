import React from "react";

let span = [];
for (let i = 1; i <= 18; i++) {
	span.push(<span style={{ ["--i"]: i }} key={i}></span>);
}

export default function Loader() {
	return (
		<>
			<div className='loader loader2'>
				{span}
				<div className='plane'></div>
			</div>
			<p className='loader-text'>Loading Tickets...</p>
		</>
	);
}
