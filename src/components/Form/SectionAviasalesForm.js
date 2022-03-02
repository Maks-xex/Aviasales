import React from "react";
import { Form } from "./Form.js";

export const SectionAviasalesForm = ({ filterForm }) => (
	<section className='aviasales-form'>
		<Form onFilterForm={filterForm} />
	</section>
);
