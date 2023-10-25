// El jugador puede elegir entre armar un equipo de forma totalmente aleatoria o en base a la valoración de cada jugador creado. ==> Separar lógica para poder elegir el método

// FUNCIÓN PARA EL BACK (ALMACENAR COMO VIRTUAL O ESTÁTICO EN LA DB)
const playerAvg = player => {
	let { isGoalKeeper, isPasser, defense, attack, average } = player;
	let total = (defense + attack) / 2;
	total = isGoalKeeper ? +1 : null;
	total = !isPasser ? -0.5 : null;
	average = total;
	return total;
};

export const randomCalc = array => {
	const length = array.length;
	const randomIndex = Math.floor(Math.random() * length);
	return array[randomIndex];
};

export const goalkeepersList = array => {
	if (array.length === 0) return 0;
	return array.filter(player => player.isGoalKeeper);
};

// Al llamar a esta func, c/jugador debe tener su prop average
export const averageCalc = array => {
	if (array.length === 0) return 0;
	const total = array.reduce((acc, element) => {
		return acc + element.average;
	});
	return +(total / array.length).toFixed(2);
};

export const CreateRandomTeam = array => {
	if (array.length % 2 !== 0) {
		throw new Error('The list of players must be an even number');
	}
	let team1 = [];
	let team2 = [];
	while (team1.length < array.length / 2) {
		const randomPlayer = randomCalc(array);
		if (!team1.includes(randomPlayer)) team1.push(randomPlayer);
	}
	array.forEach(player => {
		if (!team1.some(team1Player => team1Player.name === player.name))
			team2.push(player);
	});
	return [team1, team2];
};

/*
1- Calcular el promedio de la lista original y usarlo como ref. Adicionalmente podría estimarse cuántos jugadores tienen la prop isGoalKeeper: true para seleccionarlos como arqueros y base para c/equipo. debe analizarse si existe alguno (QUÉ PASA?), si hay 2 (QUÉ PASA?) o si hay más de 2 (QUÉ PASA?)
2- Se toma el jugador 1 de la lista original y se lo asigna a un equipo (1) o aletoriamente (A DEFINIR...)
3- se continúa iterando el resto de la lista, tomando como referencia su valor promedio y el flag "isGoalKeeper"
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
export const createValueTeam = array => {
	if (array.length % 2 !== 0) {
		throw new Error('The list of players must be an even number');
	}

	const playersObj = {
		players: array,
		allPlayersAverage: averageCalc(array),
		team1: [],
		team2: [],
		team1Average: 0,
		team2Average: 0,
		goalkeepers: goalkeepersList(array),
	};

	const {
		players,
		allPlayersAverage,
		team1,
		team2,
		team1Average,
		team2Average,
		goalkeepers,
	} = playersObj;

	const calculateTeamAverage = team => {
		return averageCalc(team);
	};

	const assignPlayerToTeam = (player, targetTeam, targetTeamAverage) => {
		targetTeam.push(player);
		targetTeamAverage = calculateTeamAverage(targetTeam);
		return targetTeamAverage;
	};

	if (goalkeepers.length > 0) {
		goalkeepers.forEach(goalkeeper => {
			let targetTeamKey;

			if (team1.length === 0 && team2.length === 0) {
				const randomTeamIndex = Math.random() < 0.5 ? 1 : 2;
				targetTeamKey = `team${randomTeamIndex}`;
			} else if (team1.length === 0 || team2.length === 0) {
				targetTeamKey = team1.length === 0 ? 'team1' : 'team2';
			} else {
				targetTeamKey =
					goalkeeper.average >= allPlayersAverage
						? team1Average > team2Average
							? 'team2'
							: 'team1'
						: team1Average > team2Average
						? 'team1'
						: 'team2';
			}

			targetTeamKey === team1
				? (team1Average = assignPlayerToTeam(
						goalkeeper,
						[targetTeamKey],
						[`${targetTeamKey}Average`]
				  ))
				: (team2Average = assignPlayerToTeam(
						goalkeeper,
						[targetTeamKey],
						[`${targetTeamKey}Average`]
				  ));
		});
	}
	players.forEach(player => {
		let targetTeamKey;

		if (team1.length === 0 || team2.length === 0) {
			targetTeamKey = team1.length === 0 ? 'team1' : 'team2';
		} else {
			targetTeamKey =
				player.average >= allPlayersAverage
					? team1Average > team2Average
						? 'team2'
						: 'team1'
					: team1Average > team2Average
					? 'team1'
					: 'team2';
		}

		if (!team1.includes(player) || !team2.includes(player)) {
			targetTeamKey === team1
				? (team1Average = assignPlayerToTeam(
						player,
						[targetTeamKey],
						[`${targetTeamKey}Average`]
				  ))
				: (team2Average = assignPlayerToTeam(
						player,
						[targetTeamKey],
						[`${targetTeamKey}Average`]
				  ));
		}
	});

	return playersObj;
};

/*
Bloque if principal
if (goalkeeper.average >= allPlayersAverage) {
					targetTeamKey = team1Average > team2Average? 'team2' : 'team1';
				} else {
					targetTeamKey = team1Average > team2Average? 'team1' : 'team2';
				}
*/
