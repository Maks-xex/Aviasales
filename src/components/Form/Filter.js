import React from "react";

export const Filter = () => (
	<fieldset className='aviasales-form__number-of-transfer'>
		<legend>
			<h3>Количество пересадок</h3>
		</legend>
		<ul className='number-of-transfers__item-list'>
			<li className='number-of-transfers__item'>
				<label>
					<input type='checkbox' name='all' />
					<span></span>
					Все
				</label>
			</li>
			<li className='number-of-transfers__item'>
				<label>
					<input type='checkbox' name='without' />
					<span></span>
					Без пересадок
				</label>
			</li>
			<li className='number-of-transfers__item'>
				<label>
					<input type='checkbox' name='one-transfer' />
					<span></span>1 пересадка
				</label>
			</li>
			<li className='number-of-transfers__item'>
				<label>
					<input type='checkbox' name='two-transfer' />
					<span></span>2 пересадки
				</label>
			</li>
			<li className='number-of-transfers__item'>
				<label>
					<input type='checkbox' name='three-transfer' />
					<span></span>3 пересадки
				</label>
			</li>
		</ul>
	</fieldset>
);
