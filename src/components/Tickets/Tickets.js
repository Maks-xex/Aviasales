import React from "react";
// import S7logo from "../../assets/images/S7 Logo.png";
import propTypes from "prop-types";
import "./TicketStyle.scss";
import { convertTime } from "../../utils/converTime";
export const Tickets = ({ tickets }) => {
	const companyLogo = `https://pics.avs.io/99/36/${tickets.carrier}.png`;
	const [firstSegments, secondSegments] = tickets.segments;
	const dateForth = (firstSegments.date = new Date().toLocaleDateString());
	const dateBack = (secondSegments.date = new Date().toLocaleDateString());
	const timeForth = convertTime(firstSegments.duration);
	const timeBack = convertTime(secondSegments.duration);
	const stopForth = firstSegments.stops.join(", ");
	const stopBack = secondSegments.stops.join(", ");
	const transfersForth = firstSegments.stops.length;
	const transfersBack = secondSegments.stops.length;
	const price = tickets.price
		.toString()
		.split("")
		.map((it, i, arr) => (i === arr.length - 4 ? it + " " : it));

	return (
		<li className='tickets-list__item'>
			<div className='header-wrapper'>
				<h2 className='tickets-list-item__price'>{price}₽</h2>
				<img src={companyLogo} alt={`${tickets.carrier}`} />
			</div>
			<table className='table-route'>
				<tbody>
					<tr>
						<th>
							{firstSegments.origin} - {firstSegments.destination}
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
							{secondSegments.origin} - {secondSegments.destination}
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
};
Tickets.propTypes = {
	tickets: propTypes.object.isRequired,
};
