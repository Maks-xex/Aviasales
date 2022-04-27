const getRandomArbitrary = (min, max) =>
	Math.round(Math.random() * (max - min) + min);

const arrayStops = ["HKT", "MOW", "AWE"];

const getRandomRepeater = (value) => {
	let i = 0;
	const newArrayStops = [];
	while (i <= value) {
		i++;
		newArrayStops.push(arrayStops[getRandomArbitrary(0, 2)]);
	}
	return newArrayStops;
};

export const getTicketsArray = () =>
	Array(50)
		.fill()
		.map((_) => ({
			// Цена в рублях
			price: getRandomArbitrary(3000, 70000),
			// Код авиакомпании (iata)
			carrier: "S7",
			// Массив перелётов.
			// В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
			segments: [
				{
					// Код города (iata)
					origin: "MOW",
					// Код города (iata)
					destination: "HKT",
					// Дата и время вылета туда
					date: `${getRandomArbitrary(1, 30)}.${getRandomArbitrary(
						1,
						12,
					)}.${getRandomArbitrary(2000, 2020)}`,
					// Массив кодов (iata) городов с пересадками
					stops: getRandomRepeater(getRandomArbitrary(-1, 2)),
					// Общее время перелёта в минутах
					duration: getRandomArbitrary(500, 1500),
				},
				{
					// Код города (iata)
					origin: "HKT",
					// Код города (iata)
					destination: "MOW",
					// Дата и время вылета обратно
					date: `${getRandomArbitrary(1, 30)}.${getRandomArbitrary(
						1,
						12,
					)}.${getRandomArbitrary(2000, 2020)}`,
					// Массив кодов (iata) городов с пересадками
					stops: getRandomRepeater(getRandomArbitrary(-1, 2)),
					// Общее время перелёта в минутах
					duration: getRandomArbitrary(500, 1500),
				},
			],
		}));
