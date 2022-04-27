import { AVIASALES_URL } from "./constants";

export const getTickets = async (id) => {
	const response = await fetch(`${AVIASALES_URL}/tickets?searchId=${id}`);
	if (!response.ok) {
		throw new Error(response.status);
	}
	if (!response.stop) getTickets(id);
	let data = await response.json();
	return data;
};
