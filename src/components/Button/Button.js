import React from "react";
import propTypes from "prop-types";

export const Button = ({ onClick, children }) => (
	<button type='button' onClick={onClick}>
		{children}
	</button>
);
Button.propTypes = {
	onClick: propTypes.func.isRequired,
	children: propTypes.string.isRequired,
};
