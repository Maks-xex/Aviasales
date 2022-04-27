import { uniqueValue } from "./uniqueValue";

const checkboxesValueMap = {
	without: 0,
	"one-transfer": 1,
	"two-transfer": 2,
	"three-transfer": 3,
};

export const getFilteredTickets = (tickets, event) => {
	const checkboxElements = [...document.querySelectorAll("[type=checkbox]")];
	const target = event.target;
	const name = checkboxesValueMap[target.name];

	if (target.name === "all") {
		uniqueValue(null);
		checkboxElements.forEach((checkbox) => {
			checkbox.checked = target.checked;
			uniqueValue(checkboxesValueMap[checkbox.name]);
		});
	} else if (target.type === "checkbox") {
		checkboxElements[0].checked = false;
	}

	const checkboxes = uniqueValue(name);

	if (!checkboxes.length) {
		return tickets;
	}

	const slicedTickets = tickets.slice();

	return slicedTickets.filter(
		(ticket) =>
			checkboxes.includes(ticket.segments[0].stops.length) &&
			checkboxes.includes(ticket.segments[1].stops.length),
	);
};
