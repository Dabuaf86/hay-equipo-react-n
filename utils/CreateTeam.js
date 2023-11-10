// El jugador puede elegir entre armar un equipo de forma totalmente aleatoria o en base a la valoración de cada jugador creado. ==> Separar lógica para poder elegir el método

// FUNCIÓN PARA EL BACK (ALMACENAR COMO VIRTUAL O ESTÁTICO EN LA DB)
const playerAvg = player => {
	let { is_goalKeeper, isPasser, defense, attack, average } = player;
	let total = (defense + attack) / 2;
	total = is_goalKeeper ? +1 : null;
	total = !isPasser ? -0.5 : null;
	average = total;
	return total;
};

const randomCalc = list => {
	const length = list.length;
	const randomIndex = Math.floor(Math.random() * length);
	return list[randomIndex];
};

const goalkeepersList = playersList => {
	if (playersList.length === 0) return 0;
	return playersList.filter(player => player.is_goalKeeper);
};

// Al llamar a esta func, c/jugador debe tener su prop average
const averageCalc = list => {
	if (list.length === 0) return 0;
	const total = list.reduce((acc, element) => {
		return acc + element.average;
	}, 0);
	return +(total / list.length).toFixed(2);
};

const calculateTeamAverage = team => {
	return averageCalc(team);
};

const pushPlayerAvg = (player, targetTeam) => {
	targetTeam.push(player);
	return calculateTeamAverage(targetTeam);
};

const CreateRandomTeam = playersList => {
	if (playersList.length % 2 !== 0) {
		throw new Error('The list of players must be an even number');
	}
	const randomList = [...randomList];
	let team1 = [];
	let team2 = [];
	while (team1.length < randomList.length / 2) {
		const randomPlayer = randomCalc(randomList);
		if (!team1.includes(randomPlayer)) team1.push(randomPlayer);
	}
	randomList.forEach(player => {
		if (!team1.some(team1Player => team1Player.name === player.name))
			team2.push(player);
	});
	return [team1, team2];
};

/*
1- Calcular el promedio de la lista original y usarlo como ref. Adicionalmente podría estimarse cuántos jugadores tienen la prop is_goalKeeper: true para seleccionarlos como arqueros y base para c/equipo. debe analizarse si existe alguno (QUÉ PASA?), si hay 2 (QUÉ PASA?) o si hay más de 2 (QUÉ PASA?)
2- Se toma el jugador 1 de la lista original y se lo asigna a un equipo (1) o aletoriamente (A DEFINIR...)
3- se continúa iterando el resto de la lista, tomando como referencia su valor promedio y el flag "is_goalKeeper"
4- Se consulta el promedio actual del equipo1 y del equipo2. ESCENARIOS POSIBLES:
	a. [e1(1): 9, e2(1): 5, jugador actual: 7]
		VA A e2 => [e1(1): 9, e2(2): 6]
			jugador actual: 9
			VA A e2 => [e1(1): 9, e2(3): 7]
				jugador actual: 5
				VA A e1 => [e1(2): 7, e2(3): 7]

	b. [e1(1): 9, e2(1): 5, jugador actual: 7]
		VA A e1 => [e1(2): 8, e2(1): 5]
			jugador actual: 9
			VA A e2 => [e1(2): 8, e2(2): 7]
				jugador actual: 5
				VA A e1 => [e1(3): 7, e2(2): 7]

5- RESUMEN:Debe evaluarse el promedio |x| de la lista y comparar cada jugador contra el mismo. Si es mayor o igual al promedio, va al equipo de menor valuación y si es menor, va al equipo mayor. De qué forma consulto el promedio de cada equipo con cada iteración
*/
const createValueTeam = playersList => {
	if (playersList.length % 2 !== 0) {
		throw new Error('The list of players must hane an even number');
	}

	const sortedPlayersList = playersList.sort((a, b) => b.average - a.average);

	const listAverage = averageCalc(sortedPlayersList);
	const goalkeepers = goalkeepersList(sortedPlayersList);
	const team1 = [];
	const team2 = [];
	let team1Average = 0;
	let team2Average = 0;

	const assignPlayer = players => {
		return players.forEach(player => {
			if (!team1.includes(player) && !team2.includes(player)) {
				let targetTeamKey;
				if (team1.length === 0 || team2.length === 0) {
					targetTeamKey = team1.length === 0 ? 'team1' : 'team2';
				} else {
					const team1Better = team1Average > team2Average;
					const lengthDiff = Math.abs(team1.length - team2.length) === 2;
					const team1Complete = team1.length === players.length / 2;
					const team2Complete = team2.length === players.length / 2;
					if (team1Complete) targetTeamKey = 'team2';
					else if (team2Complete) targetTeamKey = 'team1';
					else if (lengthDiff) {
						targetTeamKey = team1.length > team2.length ? 'team2' : 'team1';
					} else {
						targetTeamKey =
							player.average >= listAverage
								? team1Better
									? 'team2'
									: 'team1'
								: team1Better
								? 'team1'
								: 'team2';
					}
				}

				targetTeamKey === 'team1'
					? (team1Average = pushPlayerAvg(player, team1))
					: (team2Average = pushPlayerAvg(player, team2));
			}
		});
	};

	if (goalkeepers.length > 0) assignPlayer(goalkeepers);

	assignPlayer(sortedPlayersList);

	return { listAverage, goalkeepers, team1Average, team2Average, team1, team2 };
};

const list_4 = [
	{
		name: 'Gustavo Olivieri',
		alias: 'Gusti',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 6,
		attack: 4,
		average: 5,
		winning_ratio: '',
	},
	{
		name: 'Mariano Strugo',
		alias: 'Marianito',
		position: 'defense',
		is_goalKeeper: true,
		is_passer: true,
		defense: 8,
		attack: 6,
		average: 7,
		winning_ratio: '',
	},
	{
		name: 'Mariano Tiralongo',
		alias: 'MET',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 4,
		attack: 4,
		average: 4,
		winning_ratio: '',
	},
	{
		name: 'Daniel Abuaf',
		alias: 'Dani',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 7,
		attack: 6,
		average: 6.5,
		winning_ratio: '',
	},
	{
		name: 'Martín Fernández',
		alias: 'Tincho',
		position: 'mid_field',
		is_goalKeeper: false,
		is_passer: true,
		defense: 7,
		attack: 8,
		average: 7.5,
		winning_ratio: '',
	},
	{
		name: 'Nicolás Sofo',
		alias: 'Nico Sofo',
		position: 'defense',
		is_goalKeeper: true,
		is_passer: true,
		defense: 9,
		attack: 6,
		average: 7.5,
		winning_ratio: '',
	},
	{
		name: 'Juan',
		alias: 'Juan',
		position: 'mid_field',
		is_goalKeeper: true,
		is_passer: true,
		defense: 9,
		attack: 7,
		average: 8,
		winning_ratio: '',
	},
	{
		name: 'Guido',
		alias: 'Guido',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: false,
		defense: 6,
		attack: 7,
		average: 6.5,
		winning_ratio: '',
	},
	{
		name: 'Miguel',
		alias: 'Migue',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 8,
		attack: 6,
		average: 7,
		winning_ratio: '',
	},
	{
		name: 'Gustavo Tiralongo',
		alias: 'GT',
		position: 'mid_field',
		is_goalKeeper: true,
		is_passer: true,
		defense: 6,
		attack: 8,
		average: 7,
		winning_ratio: '',
	},
	{
		name: 'Matías',
		alias: 'Rulo',
		position: 'mid_field',
		is_goalKeeper: true,
		is_passer: true,
		defense: 7,
		attack: 7,
		average: 7,
		winning_ratio: '',
	},
	{
		name: 'Alexis Saladino',
		alias: 'Ale',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 4,
		attack: 7,
		average: 5.5,
		winning_ratio: '',
	},
	{
		name: 'Ernesto Schiutto',
		alias: 'Ernesto',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 7,
		attack: 5,
		average: 6,
		winning_ratio: '',
	},
	{
		name: 'Isaías',
		alias: 'Isa',
		position: 'mid_field',
		is_goalKeeper: true,
		is_passer: false,
		defense: 7,
		attack: 9,
		average: 8,
		winning_ratio: '',
	},
	{
		name: 'Camilo',
		alias: 'Camilo',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 6,
		attack: 7,
		average: 6.5,
		winning_ratio: '',
	},
	{
		name: '',
		alias: 'Tano',
		position: 'goal_keeper',
		is_goalKeeper: true,
		is_passer: true,
		defense: 10,
		attack: 6,
		average: 8,
		winning_ratio: '',
	},
];

// for (let index = 0; index < 5; index++) {
// console.log(createValueTeam(list_4));
// }
