import React from "react";
import "./fomrStyle.scss";
import { Filter } from "./Filter";
import { Tabs } from "./Tabs";
import propTypes from "prop-types";

export const Form = ({ onFilterForm }) => (
	<form onChange={(evt) => onFilterForm(evt)}>
		<Filter />
		<Tabs />
	</form>
);
Form.propTypes = {
	onFilterForm: propTypes.func.isRequired,
};
