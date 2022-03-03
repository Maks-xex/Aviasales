import React from "react";
import { Form } from "./Form.js";
import propTypes from "prop-types";

export const SectionAviasalesForm = ({ filterForm, loading }) => (
	<section className='aviasales-form'>
		<Form onFilterForm={filterForm} loading={loading} />
	</section>
);
SectionAviasalesForm.propTypes = {
	filterForm: propTypes.func.isRequired,
	loading: propTypes.bool,
};
