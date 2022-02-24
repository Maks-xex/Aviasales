import React, { useState, useEffect } from "react";

import { Form } from "./components/Form/Form";
import { Tickets } from "./components/Tickets/Tickets";
import { Button } from "./components/Button/Button";
import { Loader } from "./components/Loader/Loader";
import { getTickets } from "./api/getTickets";
import { Header } from "./components/Header/Header";

export const App = () => {
	//State
	const [tickets, setTicket] = useState([]);
	const [origin, setOrigin] = useState([]);
	const [count, setCount] = useState(5);

	//hooks
	const getTicketsAsync = async () => {
		const response = await getTickets();
		setTicket(response);
		setOrigin(response);
	};
	useEffect(() => {
		getTicketsAsync();
	}, []);

	//filter Checkbox
	const filterTransfer = () => {
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
		if (noCheckCount >= checkbox.length) {
			return;
		}
		tickets.forEach((it) => {
			for (let target of checkbox) {
				if (target.name === "all" && target.checked) {
					filtered.push(it);
					return;
				}
				if (
					it.segments[0].stops.length === valueCheckboxMap[target.name] &&
					it.segments[1].stops.length === valueCheckboxMap[target.name] &&
					target.checked
				) {
					filtered.push(it);
					return;
				}
			}
		});
		setTicket(filtered);
	};
	//filter tabs
	const filterForm = () => {
		setTicket(origin);
		filterTransfer();
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
				setTicket(
					tickets
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
						.map((elem) => elem),
				);
			}
		});
	};

	//button click
	const handleClick = () => {
		setCount(count + 5);
	};
	return (
		<>
			<Header />
			<div className='wrapper'>
				<section className='aviasales-form'>
					<Form onFilterForm={filterForm} />
				</section>
				<section className='tickets'>
					{tickets.length === 0 ? (
						<Loader />
					) : (
						<>
							<ul className='tickets__list'>
								{tickets.map((tickets, i) => {
									if (i >= count) {
										return null;
									}
									return <Tickets tickets={tickets} key={tickets.price} />;
								})}
							</ul>
							<Button onClick={handleClick} />
						</>
					)}
				</section>
			</div>
		</>
	);
};
