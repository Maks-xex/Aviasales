import { search } from "./searchTickets";
const url = "https://front-test.beta.aviasales.ru/search";
const getTickets = (url, callback) => {
	fetch(url)
		.then((res) => res.json())
		.then((json) => search(json.searchId))
		.then((data) => callback(data.tickets));
};
export { getTickets, url };
