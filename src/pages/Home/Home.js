import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { ErrorBoundaries } from "../../components/ErrorBoundaries";
import { Loader } from "../../components/Loader/Loader";

import { getSearchId } from "../../api/getSearchId";
import { getTickets } from "../../api/getTickets";

import { SectionTickets } from "./Tickets/SectionTickets";
import { SectionAviasalesForm } from "./Form/SectionAviasalesForm";

import { sortedTicketsBy } from "../../utils/sortedTicketsBy";
import { getFilteredTickets } from "../../utils/getFilteredTickets";

import { getTicketsArray } from "../../api/ArrayTickets";

const setActiveTab = (checked) => {
	const list = [...document.querySelectorAll(".filter-list__item")];
	list.forEach((it) => {
		it.setAttribute("class", "filter-list__item");
		if (it.firstChild.firstChild.value === checked) {
			it.classList.add(
				`filter-list__item--active-${checked}`,
				"filter-list__item--active",
			);
		}
	});
};

export const Home = () => {
	const [tickets, setTickets] = useState([]);
	const [changedTickets, setChangedTickets] = useState([]);
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(5);
	const [error, setError] = useState(null);

	const getTicketsAsync = async () => {
		setLoading(true);
		try {
			const searchId = await getSearchId();
			const response = await getTickets(searchId);
			setChangedTickets(response);
			setTickets(response);
		} catch (error) {
			setLoading(false);
			setError(`Error status: ${error.message}`);
			throw new Error(error.message);
		}
		setLoading(false);
	};

	const handleFilterForm = (evt) => {
		const checked = document.querySelector("[type=radio]:checked").value;
		setActiveTab(checked);
		const filteredTickets = getFilteredTickets(tickets, evt);
		const sortedTickets = sortedTicketsBy(filteredTickets, checked);
		setChangedTickets(sortedTickets);
		setCount(5);
	};

	const handleShowMoreClick = () => {
		setCount(count + 5);
	};
	useEffect(() => {
		// const response = getTicketsArray();
		// setChangedTickets(response);
		// setTickets(response);

		getTicketsAsync();
	}, []);

	return (
		<>
			<Header />
			<div className='wrapper'>
				{error ? (
					<ErrorBoundaries errorMessage={error} />
				) : (
					<>
						<SectionAviasalesForm onFilterForm={handleFilterForm} />
						{loading ? (
							<Loader />
						) : (
							<SectionTickets
								count={count}
								handleClick={handleShowMoreClick}
								tickets={changedTickets}
							/>
						)}
					</>
				)}
			</div>
		</>
	);
};
