import React from "react";
import "./fomrStyle.scss";
import { Filter } from "./Filter";
import { Tabs } from "./Tabs";
import propTypes from "prop-types";

export const Form = (props) => (
	<form onChange={(evt) => props.onFilterForm(evt)}>
		<Filter loading={props.loading} />
		<Tabs loading={props.loading} />
	</form>
);
Form.propTypes = {
	onFilterForm: propTypes.func.isRequired,
};
