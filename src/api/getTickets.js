import { searchId } from "./constants";

export const getTickets = async (id) => {
	let data = await fetch(searchId + id)
		.then((response) => (response.ok ? response.json() : getTickets(id)))
		.then((json) => {
			if (json && !json.stop) {
				return getTickets(id);
			}
			return json.tickets;
		});
	return data;
};
