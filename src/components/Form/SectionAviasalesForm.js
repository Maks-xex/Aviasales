import React from "react";
import { Form } from "./Form.js";
import propTypes from "prop-types";

export const SectionAviasalesForm = ({ filterForm }) => (
	<section className='aviasales-form'>
		<Form onFilterForm={filterForm} />
	</section>
);
SectionAviasalesForm.propTypes = {
	filterForm: propTypes.func.isRequired,
};
