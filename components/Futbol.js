import React, { useState } from 'react';
// import './Futbol.css';

const players = [
	'Pepi',
	'Dani',
	'Gastón',
	'Guille',
	'Leo',
	'Marianito',
	'Quito',
	'Tincho',
	'Alexis',
	'Fer',
	'GT',
	'Guido',
	'MT',
	'Nico',
	'Maxi',
	'Isa',
	// 'Andy',
	// 'Gera',
	// 'Pancho',
];

const armarEquipo = array => {
	let result = [];
	while (result.length < 8) {
		const random = array[Math.ceil(Math.random() * array.length)];
		if (!result.includes(random)) result.push(random);
	}
	return result;
};

const PartidoViernes = () => {
	const [equipoAmarillo, setEquipoAmarillo] = useState([]);
	const [equipoTri, setEquipoTri] = useState([]);

	const fecha = new Date().toLocaleDateString();

	const handleEquipoAmarillo = () => {
		if (equipoTri.length === 0 && equipoAmarillo.length === 0) {
			const nuevoEquipo = armarEquipo(players);
			setEquipoAmarillo(nuevoEquipo);
		}
	};

	const handleRemainAma = () => {
		let remain = [];
		for (let i = 0; i < equipoTri.length; i++) {
			for (let j = 0; j < players.length; j++) {
				if (!equipoTri.includes(players[j]) && !remain.includes(players[j])) {
					remain.push(players[j]);
					setEquipoAmarillo(remain);
				}
			}
		}
	};

	const handleEquipoTri = () => {
		if (equipoTri.length === 0 && equipoAmarillo.length === 0) {
			const nuevoEquipo = armarEquipo(players);
			setEquipoTri(nuevoEquipo);
		}
	};

	const handleRemainTri = () => {
		let remain = [];
		for (let i = 0; i < equipoAmarillo.length; i++) {
			for (let j = 0; j < players.length; j++) {
				if (
					!equipoAmarillo.includes(players[j]) &&
					!remain.includes(players[j])
				) {
					remain.push(players[j]);
					setEquipoTri(remain);
				}
			}
		}
	};

	return (
		<div>
			<h2>Fútbol 8 ({fecha})</h2>
			<div className='equipos'>
				<div className='equipo'>
					<h3>Equipo Amarillo</h3>
					{equipoTri.length > 0 ? (
						<button onClick={handleRemainAma} className='btn-amarillo'>
							Resto
						</button>
					) : (
						<button onClick={handleEquipoAmarillo} className='btn-amarillo'>
							Armar
						</button>
					)}
					<div className='players'>
						{equipoAmarillo.map((el, i) => (
							<li className='players' key={i}>
								{el}
							</li>
						))}
					</div>
				</div>
				<div className='equipo'>
					<h3>Equipo Tricolor</h3>
					{equipoAmarillo.length > 0 ? (
						<button onClick={handleRemainTri} className='btn-amarillo'>
							Resto
						</button>
					) : (
						<button onClick={handleEquipoTri} className='btn-tri'>
							Armar
						</button>
					)}
					<div>
						{equipoTri.map((el, i) => (
							<li className='players' key={i}>
								{el}
							</li>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartidoViernes;
