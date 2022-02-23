import React from "react";
import propTypes from "prop-types";

const Button = ({ onClick }) => {
	return (
		<button type='button' onClick={onClick}>
			Показать ещё 5
		</button>
	);
};
Button.propTypes = {
	onClick: propTypes.func.isRequired,
};
export { Button };
