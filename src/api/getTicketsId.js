import { search } from "./constants";

export const getTicketsId = async (onError) => {
	let data = await fetch(search)
		.then((res) => {
			if (!res.ok) {
				throw res.statusText;
			}
			return res.json();
		})
		.then((json) => json.searchId)
		.catch((err) => onError("Error: " + err));
	return data;
};
