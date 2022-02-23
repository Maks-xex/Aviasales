import React from "react";
import S7logo from "../../assets/images/S7 Logo.png";
import propTypes from "prop-types";
import "./TicketStyle.scss";

function Tickets({ tickets }) {
	const segments = tickets.segments;

	function timeConvert(num) {
		const hours = Math.floor(num / 60);
		const minutes = Math.round((num / 60 - hours) * 60);
		return hours + "ч " + minutes + "м";
	}

	const dateForth = (segments[0].date = new Date().toLocaleDateString());
	const dateBack = (segments[1].date = new Date().toLocaleDateString());
	const timeForth = timeConvert(segments[0].duration);
	const timeBack = timeConvert(segments[1].duration);
	const stopForth = segments[0].stops.join(", ");
	const stopBack = segments[1].stops.join(", ");
	const transfersForth = segments[0].stops.length;
	const transfersBack = segments[1].stops.length;
	const price = tickets.price
		.toString()
		.split("")
		.map((it, i, arr) => (i === arr.length - 4 ? it + " " : it));

	return (
		<li className='tickets-list__item'>
			<div className='header-wrapper'>
				<h2 className='tickets-list-item__price'>{price}₽</h2>
				<img src={S7logo} alt='S7_logo' />
			</div>
			<table className='table-route'>
				<tbody>
					<tr>
						<th>
							{segments[0].origin} - {segments[0].destination}
						</th>
						<th>в пути</th>
						<th>
							{transfersForth ? transfersForth + " Пересадок" : "Без пересадок"}
						</th>
					</tr>
					<tr>
						<td>{dateForth}</td>
						<td>{timeForth}</td>
						<td>{stopForth}</td>
					</tr>
					<tr>
						<th>
							{segments[1].origin} - {segments[1].destination}
						</th>
						<th>в пути</th>
						<th>
							{transfersBack ? transfersBack + " Пересадок" : "Без пересадок"}
						</th>
					</tr>
					<tr>
						<td>{dateBack}</td>
						<td>{timeBack}</td>
						<td>{stopBack}</td>
					</tr>
				</tbody>
			</table>
		</li>
	);
}
Tickets.propTypes = {
	tickets: propTypes.object.isRequired,
};

export default Tickets;
