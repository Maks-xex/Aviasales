import React from "react";

const checkboxValue = {
	all: "Все",
	without: "Без пересадок",
	"one-transfer": "1 пересадка",
	"two-transfer": "2 пересадка",
	"three-transfer": "3 пересадка",
};
const renderCheckboxButton = () =>
	Object.keys(checkboxValue).map((it, i) => (
		<li className='number-of-transfers__item' key={i}>
			<label>
				<input type='checkbox' name={it} />
				<span></span>
				{checkboxValue[it]}
			</label>
		</li>
	));

export const Filter = () => (
	<fieldset className='aviasales-form__number-of-transfer'>
		<legend>
			<h3>Количество пересадок</h3>
		</legend>
		<ul className='number-of-transfers__item-list'>{renderCheckboxButton()}</ul>
	</fieldset>
);
