let arr = [];
export const uniqueValue = (value) => {
	if (value === null) {
		return (arr = []);
	}
	if (value === undefined) {
		return arr;
	}
	if (!arr.includes(value)) {
		arr.push(value);
	} else {
		arr.splice(arr.indexOf(value), 1);
	}
	return arr;
};
