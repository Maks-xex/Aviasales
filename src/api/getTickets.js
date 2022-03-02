import { AVIASALES_URL } from "./constants";

export const getTickets = async (id) => {
	let response = await fetch(`${AVIASALES_URL}/tickets?searchId=${id}`);
	let data = await response.json();
	if (data && !data.stop) {
		getTickets(id);
	}
	return data;
};
