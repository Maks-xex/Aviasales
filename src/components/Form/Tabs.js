import React from "react";

const radioValue = {
	cheep: "Самый дешевый",
	fast: "Самый быстрый",
	optimal: "Оптимальный",
};
export const Tabs = () => (
	<fieldset className='aviasales-form__tabs'>
		<ul className='filter__list'>
			{Object.keys(radioValue).map((it, i) => (
				<li key={i} className={"filter-list__item"}>
					<label>
						<input type='radio' name='filter' value={it} />
						{radioValue[it]}
					</label>
				</li>
			))}
		</ul>
	</fieldset>
);
