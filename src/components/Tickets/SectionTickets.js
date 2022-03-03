import React from "react";
import { Loader } from "../Loader/Loader";
import { Tickets } from "./Tickets";
import { Button } from "../Button/Button";
import propTypes from "prop-types";

const renderTickets = (tickets, count) =>
	tickets.map((ticket, i) => {
		if (i >= count) {
			return null;
		}
		return <Tickets tickets={ticket} key={ticket.price} />;
	});
export const SectionTickets = ({ loading, count, tickets, handleClick }) => {
	return (
		<section className='tickets'>
			{loading ? (
				<Loader />
			) : (
				<>
					<ul className='tickets__list'>{renderTickets(tickets, count)}</ul>
					<Button onClick={handleClick} children='Показать ещё 5' />
				</>
			)}
		</section>
	);
};
SectionTickets.propTypes = {
	loading: propTypes.bool.isRequired,
	count: propTypes.number.isRequired,
	tickets: propTypes.array.isRequired,
	handleClick: propTypes.func.isRequired,
};
