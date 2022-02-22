import React from "react";
import "./fomrStyle.scss";
import Filter from "./Filter";
import Tabs from "./Tabs";
import propTypes from "prop-types";

function Form(props) {
	return (
		<form onChange={props.onFilterForm}>
			<Filter />
			<Tabs />
		</form>
	);
}
Form.propTypes = {
	onFilterForm: propTypes.func.isRequired,
};
export default Form;
