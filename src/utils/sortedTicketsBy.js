export const sortedTicketsBy = (tickets, by = "optimal") => {
	const slicedTickets = tickets.slice();
	switch (by) {
		case "cheep":
			return slicedTickets.sort((a, b) => a.price - b.price);
		case "fastes":
			return slicedTickets.sort(
				(a, b) =>
					a.segments[0].duration +
					a.segments[1].duration -
					(b.segments[0].duration + b.segments[1].duration),
			);
		default:
			return slicedTickets.sort(
				(a, b) =>
					(a.price -
						b.price +
						a.segments[0].duration +
						a.segments[1].duration -
						(b.segments[0].duration + b.segments[1].duration)) /
						6 +
					(a.segments[0].stops.length +
						a.segments[1].stops.length -
						(b.segments[0].stops.length + b.segments[1].stops.length)) /
						6,
			);
	}
};
