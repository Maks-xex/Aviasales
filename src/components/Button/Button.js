import React from "react";
import propTypes from "prop-types";

export const Button = (props, { onClick }) => (
	<button type='button' onClick={onClick}>
		{props.children}
	</button>
);
Button.propTypes = {
	onClick: propTypes.func.isRequired,
	children: propTypes.string.isRequired,
};
