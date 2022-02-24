import { searchId } from "./constants";

export const searchTicket = async (id) => {
	let data = await fetch(searchId + id)
		.then((response) => (response.ok ? response.json() : searchTicket(id)))
		.then((json) => {
			if (json && !json.stop) {
				return searchTicket(id);
			}
			return json;
		});
	if (data && data.stop) {
		return data;
	}
};
