import React from "react";
import { Button } from "../../../components/Button/Button";
import { Tickets } from "./Tickets";
import propTypes from "prop-types";
import { Loader } from "../../../components/Loader/Loader";

const renderTickets = (tickets, count) =>
	tickets
		.slice(0, count)
		.map((ticket, i) => <Tickets tickets={ticket} key={i} />);
export const SectionTickets = ({ loading, count, tickets, handleClick }) => {
	return (
		<section className='tickets'>
			{loading ? (
				<Loader />
			) : (
				<>
					<ul className='tickets__list'>{renderTickets(tickets, count)}</ul>
					<Button onClick={handleClick}>Показать ещё 5</Button>
				</>
			)}
		</section>
	);
};
SectionTickets.propTypes = {
	count: propTypes.number.isRequired,
	tickets: propTypes.array.isRequired,
	handleClick: propTypes.func.isRequired,
};
