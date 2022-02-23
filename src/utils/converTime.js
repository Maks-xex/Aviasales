const convertTime = (num) => {
	const hours = Math.floor(num / 60);
	const minutes = Math.round((num / 60 - hours) * 60);
	return hours + "ч " + minutes + "м";
};
export { convertTime };
