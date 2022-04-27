import { AVIASALES_URL } from "./constants";

export const getSearchId = async () => {
	const response = await fetch(`${AVIASALES_URL}/search`);
	if (!response.ok) {
		throw new Error(response.status);
	}
	let data = await response.json();
	return data.searchId;
};
