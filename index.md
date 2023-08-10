\*\* Criterios de selección de players:

    * Suponiendo la siguiente preselección de equipos [a] y [b]:
    a = [
            {
    		"playerName": "Gus",
    		"isGoalKeeper": false,
    		"isPasser": true,
    		"defense": 5,
    		"attack": 4,
    		"overall": 0
    	},
    	{
    		"playerName": "Dani Romano",
    		"isGoalKeeper": false,
    		"isPasser": true,
    		"defense": 6,
    		"attack": 8,
    		"overall": 0
    	},
    ]

    b = [
        {
    		"playerName": "Tincho",
    		"isGoalKeeper": false,
    		"isPasser": true,
    		"defense": 7,
    		"attack": 8,
    		"overall": 0
    	},
    	{
    		"playerName": "Nico L.",
    		"isGoalKeeper": true,
    		"isPasser": true,
    		"defense": 7,
    		"attack": 5,
    		"overall": 0
    	},
    ]

    1) Cantidad de jugadores por equipo // si [a].length - [b].length > 1 || >1 (ej.: 2 - 2 = 0 (es lo mismo); 3 - 1 = 1 (es lo mismo); 4 - 5 = -1 (va al [a]); 4 - 2 = 2 (va al [b]))
    2) Posiciones cubiertas // si el jugador ataja y [a] contiene un jugador que ataja, va al [b] y viseversa
    3) Valoración promedio quipo // [a].value =

Cada jugador:
Ataja: si/no
laPasa: si/no // si (false) promedio - 1; else null
Ataque: 1-10
Defensa: 1-10
Promedio: 1-10 // (ataque + defensa)

PROCESO: 1) Inicio sesión con mis jugadores creados. 2) Se inicia una nueva lista de jugadores. 3) Asigno una fecha a la nueva lista. 4) De haberlos, puedo asignar jugadores ya creados. 5) Creo un jugador con sus características. Por ej:
jugador = {
name: "Jugador X",
goalkeeps: false,
isPasser: true,
defense: 6,
attack: 8,
overall: Number(((defense + attack) / 2).toFixed(2)) ==> (6 + 7 ) / 2 = 7.5
}