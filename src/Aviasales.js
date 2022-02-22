import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import Form from "./Form/form";
import Tickets from "./Tickets/Tickets";
import Button from "./Button";
import Loader from "./Loader";

export default function Aviasales() {
	//State
	let [ticket, setValue] = useState([]);
	const [originTicket, setFilter] = useState([]);
	let [count, setCount] = useState(5);
	//hooks
	useEffect(() => {
		fetch("https://front-test.beta.aviasales.ru/search")
			.then((response) => response.json())
			.then((json) => search(json.searchId));
	}, []);
	const search = (id) => {
		fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
			.then((response) => response.json())
			.then((data) => {
				setValue(data.tickets);
				setFilter(data.tickets);
			})

			.catch((err) => console.log(err));
	};
	//filter Checkbox
	function filterTransfer() {
		let filtered = [];
		setCount((count = 5));
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
		ticket.forEach((it) => {
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
		setValue((ticket = filtered));
	}
	//filter tabs
	function filterForm() {
		setValue((ticket = originTicket));
		filterTransfer();
		const list = [...document.querySelectorAll(".filter-list__item")];
		const listValue = [...document.querySelectorAll("[type=radio]")];
		listValue.forEach((radio) => {
			if (radio.checked) {
				list.find((it) => {
					it.setAttribute("class", "filter-list__item");
					if (it.firstChild.firstChild.value === radio.value) {
						it.classList.add(
							`filter-list__item--active-${radio.value}`,
							"filter-list__item--active",
						);
					}
				});
				setValue(
					ticket
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
	}

	//button click
	function handleClick() {
		setCount((count += 5));
	}
	return (
		<>
			<header>
				<img src={logo} alt='logo' />
			</header>
			<div className='wrapper'>
				<section className='aviasales-form'>
					<Form onFilterForm={filterForm} />
				</section>
				<section className='tickets'>
					{ticket.length === 0 ? (
						<Loader />
					) : (
						<>
							<ul className='tickets__list'>
								{ticket.length != 0
									? ticket.map((tickets, i) => {
											if (i >= count) {
												return;
											}
											return <Tickets tickets={tickets} key={tickets.price} />;
									  })
									: {}}
							</ul>
							<Button onClick={handleClick} />
						</>
					)}
				</section>
			</div>
		</>
	);
}
