import React from "react";
import propTypes from "prop-types";

import { Form } from "./Form.js";

export const SectionAviasalesForm = ({ onFilterForm }) => (
	<section className='aviasales-form'>
		<Form onFilterForm={onFilterForm} />
	</section>
);
SectionAviasalesForm.propTypes = {
	onFilterForm: propTypes.func.isRequired,
};
