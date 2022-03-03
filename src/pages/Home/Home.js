import React, { useState, useEffect } from "react";

import { Header } from "../../components/Header/Header";
import { getSearchId } from "../../api/getSearchId";
import { getTickets } from "../../api/getTickets";
import { SectionTickets } from "./Tickets/SectionTickets";
import { SectionAviasalesForm } from "./Form/SectionAviasalesForm";
import { ErrorBoundaries } from "../../components/ErrorBoundaries";

export const Home = () => {
	const [origin, setOrigin] = useState();
	const [tickets, setTickets] = useState([]);
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(5);
	const [error, setError] = useState();
	const getTicketsAsync = async () => {
		try {
			const searchId = await getSearchId();
			const response = await getTickets(searchId);
			setOrigin(response.tickets);
			setTickets(response.tickets);
			filterTabs();
		} catch (error) {
			setLoading(false);
			setError(error);
			throw new Error(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getTicketsAsync();
	}, []);

	const filterTransfer = (evt) => {
		let filtered = [];
		setCount(5);
		const checkbox = [...document.querySelectorAll("[type=checkbox]")];
		const valueCheckboxMap = {
			"three-transfer": 3,
			"two-transfer": 2,
			"one-transfer": 1,
			without: 0,
		};
		let noCheckCount = 0;
		checkbox.forEach((it) => {
			if (!it.checked) {
				noCheckCount++;
			}
		});
		if (noCheckCount === checkbox.length) {
			setTickets(origin);
			return;
		}
		origin.forEach((it) => {
			checkbox.forEach((target) => {
				if (evt.target.name === "all") {
					filtered.push(it);
					target.checked = evt.target.checked;
					return;
				}
				if (
					it.segments[0].stops.length === valueCheckboxMap[target.name] &&
					it.segments[1].stops.length === valueCheckboxMap[target.name] &&
					target.checked
				) {
					checkbox[0].checked = false;
					filtered.push(it);
				}
			});
		});
		setTickets(() => filtered);
	};
	const filterTabs = () => {
		const list = [...document.querySelectorAll(".filter-list__item")];
		const listValue = [...document.querySelectorAll("[type=radio]")];
		listValue.forEach((radio) => {
			if (radio.checked) {
				list.forEach((it) => {
					it.setAttribute("class", "filter-list__item");
					if (it.firstChild.firstChild.value === radio.value) {
						it.classList.add(
							`filter-list__item--active-${radio.value}`,
							"filter-list__item--active",
						);
					}
				});

				setTickets(
					(tickets) =>
						(tickets = tickets
							.sort((a, b) => {
								switch (radio.value) {
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
												(b.segments[0].stops.length +
													b.segments[1].stops.length)) /
												6
										);
								}
							})
							.map((elem) => elem)),
				);
			}
		});
	};
	const filterForm = (evt) => {
		filterTransfer(evt);
		filterTabs();
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
							loading={loading}
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
