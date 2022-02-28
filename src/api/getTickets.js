import { searchId } from "./constants";

export const getTickets = async (id) => {
	let data = await fetch(searchId + id)
		.then((response) => {
			if (!response.ok) {
				throw response.status;
			}
			return response.json();
		})
		.then((json) => {
			// if (json && !json.stop) {
			// return getTickets(id);
			// }
			return json.tickets;
		})
		.catch((err) => console.log(err));
	return data;
};
