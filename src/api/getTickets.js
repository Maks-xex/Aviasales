import { search } from "./constants";
import { searchTicket } from "./searchTickets";

export const getTickets = async () => {
	let data = await fetch(search)
		.then((res) => res.json())
		.then((json) => searchTicket(json.searchId))
		.then((data) => data.tickets);
	return data;
};
