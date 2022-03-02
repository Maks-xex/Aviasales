import { searchId } from "./constants";

export const getTickets = async (id, onError) => {
	let data = await fetch(searchId + id)
		.then((response) => {
			if (!response.ok) {
				throw response.status;
			}
			return response.json();
		})
		.then((json) => (json && !json.stop ? getTickets(id) : json.tickets))
		.catch((err) => onError("Error: " + err));
	return data;
};
