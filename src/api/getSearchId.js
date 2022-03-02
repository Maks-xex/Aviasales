import { AVIASALES_URL } from "./constants";

export const getSearchId = async () => {
	let response = await fetch(`${AVIASALES_URL}/search`);
	let data = await response.json();
	return data;
};
