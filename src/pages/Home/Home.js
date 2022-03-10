import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { getSearchId } from "../../api/getSearchId";
import { getTickets } from "../../api/getTickets";
import { SectionTickets } from "./Tickets/SectionTickets";
import { SectionAviasalesForm } from "./Form/SectionAviasalesForm";
import { ErrorBoundaries } from "../../components/ErrorBoundaries";

const tabsActive = (checked) => {
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
const ticketsSort = (checked, filteredTickets) => {
	filteredTickets
		.sort((a, b) => {
			switch (checked) {
				case "cheep":
					return a.price - b.price;
				case "fast":
					return (
						a.segments[0].duration +
						a.segments[1].duration -
						(b.segments[0].duration + b.segments[1].duration)
					);
				default:
					return (
						(a.price -
							b.price +
							a.segments[0].duration +
							a.segments[1].duration -
							(b.segments[0].duration + b.segments[1].duration)) /
							6 +
						(a.segments[0].stops.length +
							a.segments[1].stops.length -
							(b.segments[0].stops.length + b.segments[1].stops.length)) /
							6
					);
			}
		})
		.map((it) => it);
};
const checkboxFilter = (checkbox, origin, filteredTickets) => {
	const checked = [...document.querySelectorAll("[type=checkbox]:checked")];
	origin.forEach((it) => {
		if (checked.length === 0) {
			filteredTickets.push(it);
			return;
		}
		checkbox.forEach((target, i) => {
			if (
				target.checked &&
				it.segments[0].stops.length === i - 1 &&
				it.segments[1].stops.length === i - 1
			) {
				filteredTickets.push(it);
			}
		});
	});
};

const filterTransfer = (evt, origin, filteredTickets) => {
	const checkbox = [...document.querySelectorAll("[type=checkbox]")];
	if (evt.target.name === "all") {
		checkbox.forEach((target) => {
			target.checked = evt.target.checked;
		});
	} else {
		checkbox[0].checked = false;
	}

	checkboxFilter(checkbox, origin, filteredTickets);
};
export const Home = () => {
	const [origin, setOrigin] = useState([]);
	const [tickets, setTickets] = useState([]);
	const [loading, setLoading] = useState();
	const [count, setCount] = useState(5);
	const [error, setError] = useState();

	useEffect(() => {
		getTicketsAsync();
	}, []);

	const getTicketsAsync = async () => {
		setLoading(true);
		try {
			const searchId = await getSearchId();
			const response = await getTickets(searchId);
			setTickets(response.tickets);
			setOrigin(response.tickets);
		} catch (error) {
			setLoading(false);
			setError(error);
			throw new Error(error);
		}
		setLoading(false);
	};

	const filterTabs = (filteredTickets) => {
		const checked = document.querySelector("[type=radio]:checked").value;
		tabsActive(checked);
		ticketsSort(checked, filteredTickets);
	};

	const filterForm = (evt) => {
		let filteredTickets = [];
		filterTransfer(evt, origin, filteredTickets);
		filterTabs(filteredTickets);
		setTickets(filteredTickets);
		setCount(5);
	};
	const handleClick = () => {
		setCount(count + 5);
	};
	return (
		<>
			<Header />
			<div className='wrapper'>
				{error ? (
					<ErrorBoundaries errorMessage={error.message} />
				) : (
					<>
						<SectionAviasalesForm filterForm={filterForm} loading={loading} />
						<SectionTickets
							count={count}
							handleClick={handleClick}
							tickets={tickets}
						/>
					</>
				)}
			</div>
		</>
	);
};
