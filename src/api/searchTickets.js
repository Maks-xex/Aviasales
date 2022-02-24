const URL = "https://front-test.beta.aviasales.ru/tickets?searchId=";
const search = async (id, url = URL) => {
	let data = await fetch(url + id)
		.then((response) => (response.ok ? response.json() : search(id)))
		.then((json) => {
			if (json && !json.stop) {
				return search(id);
			}
			return json;
		});
	if (data && data.stop) {
		return data;
	}
};
export { search };
