const search = async (id) => {
	let data = await fetch(
		`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`,
	)
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
