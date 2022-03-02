import React from "react";

export const ErrorBoundaries = ({ errorMessage }) => (
	<div className='error-message' style={{ margin: "80px auto" }}>
		<h2>что-то пошло не так...</h2>
		<p>{errorMessage}</p>
	</div>
);
