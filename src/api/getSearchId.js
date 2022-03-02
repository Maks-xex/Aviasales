import { search } from "./constants";

export const getSearchId = async (onError) => {
	let data = await fetch(search)
		.then((res) => res.json())
		.then(
			(json) => json.searchId,
			(err) => {
				onError(err);
			},
		);
	return data;
};
