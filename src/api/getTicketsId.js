import { search } from "./constants";

export const getTicketsId = async () => {
	let data = await fetch(search)
		.then((res) => res.json())
		.then((json) => json.searchId);
	return data;
};
