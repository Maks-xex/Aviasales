import { searchId } from "./constants";

export const getTickets = async (id, onError) => {
	let data = await fetch(searchId + id)
		.then((response) => response.json())
		.then(
			(json) => (json && !json.stop ? getTickets(id) : json.tickets),
			(err) => {
				onError(err);
			},
		);
	return data;
};
