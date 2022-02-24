import React from "react";
import "./fomrStyle.scss";
import { Filter } from "./Filter";
import { Tabs } from "./Tabs";
import propTypes from "prop-types";

export const Form = (props) => (
	<form onChange={props.onFilterForm}>
		<Filter />
		<Tabs />
	</form>
);
Form.propTypes = {
	onFilterForm: propTypes.func.isRequired,
};
