import { search } from "./searchTickets";
const URL = "https://front-test.beta.aviasales.ru/search";
export const getTickets = async (url = URL) => {
	let data = await fetch(url)
		.then((res) => res.json())
		.then((json) => search(json.searchId))
		.then((data) => data.tickets);
	return data;
};

// const getValue = async () => {
// 	try {
// 		let value = await getTickets();
// 	} catch (err) {
// 		console.log(err);
// 	}
// };
