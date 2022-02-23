import React from "react";

const Tabs = () => {
	const radioValue = {
		cheep: "Самый дешевый",
		fast: "Самый быстрый",
		optimal: "Оптимальный",
	};
	return (
		<fieldset className='aviasales-form__tabs'>
			<ul className='filter__list'>
				{Object.keys(radioValue).map((it, i) => {
					return (
						<li key={i} className={"filter-list__item"}>
							<label>
								<input type='radio' name='filter' value={it} />
								{radioValue[it]}
							</label>
						</li>
					);
				})}
			</ul>
		</fieldset>
	);
};

export { Tabs };
