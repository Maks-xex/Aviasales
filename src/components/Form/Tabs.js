import React from "react";

const radioValue = {
	cheep: "Самый дешевый",
	fast: "Самый быстрый",
	optimal: "Оптимальный",
};
const acticveButton =
	"filter-list__item filter-list__item--active-optimal filter-list__item--active";
const renderRadioButtons = () =>
	Object.keys(radioValue).map((it, i) => (
		<li
			key={i}
			className={it === "optimal" ? acticveButton : "filter-list__item"}>
			<label>
				<input
					type='radio'
					name='filter'
					value={it}
					defaultChecked={it === "optimal"}
				/>
				{radioValue[it]}
			</label>
		</li>
	));

export const Tabs = () => (
	<fieldset className='aviasales-form__tabs'>
		<ul className='filter__list'>{renderRadioButtons()}</ul>
	</fieldset>
);
