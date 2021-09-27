import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	Alert,
	Button,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import helpFetch from '../utils/helpFetch';
import style from './Styles';

// let initialState = [
// 	'Gusti',
// 	'Pepi',
// 	'Dani',
// 	'Gastón',
// 	'Guille',
// 	'Leo',
// 	'Marianito',
// 	'Tincho',
// 	'Alexis',
// 	'MT',
// 	'Nico',
// 	'Maxi',
// 	'Isa',
// 	'Andy',
// 	'Gera',
// 	'GT',
// ];

const PlayerScreen = () => {
	const [players, setPlayers] = useState([]);
	const [player, setPlayer] = useState('');
	const [score, setScore] = useState(0);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let api = helpFetch();
	const URL = 'http://localhost:3001/players';

	// useEffect(() => {
	// 	setLoading(true);
	// 	api.get(URL).then(res => {
	// 		if (!res?.err) {
	// 			console.log('RESPUESTA: ', res);
	// 			setPlayers(res);
	// 			setError(null);
	// 		} else {
	// 			setPlayers(null);
	// 			setError(res);
	// 		}
	// 		setLoading(false);
	// 	});
	// }, [URL, players]);

	const createData = data => {
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.post(URL, options).then(res => {
			if (!res.err) setPlayers([...players, data]);
			else setError(res);
		});
	};

	const updateData = data => {
		const endpoint = `${URL}/${data.id}`;
		const options = {
			body: data,
			headers: { 'content-type': 'application/json' },
		};
		api.put(endpoint, options).then(res => {
			if (!res.err) {
				let newData = players.map(el => (el.id === data.id ? data : el));
				setPlayers(newData);
			} else setError(res);
		});
	};

	const deleteData = id => {
		const isDelete = window.confirm(
			`Estás seguro de querer borrar el jugador #'${id}'?`
		);

		if (isDelete) {
			const endpoint = `${URL}/${id}`;
			const options = {
				headers: { 'content-type': 'application/json' },
			};
			api.del(endpoint, options).then(res => {
				if (!res.err) {
					let newData = players.filter(el => el.id !== id);
					setPlayers(newData);
				} else setError(res);
			});
		} else return;
	};

	const namePress = (e, i) => {
		// console.log('EEEEEEEEEEE', i);
		// console.log('PLAYERS', players);
		Alert.alert(`Seguro que querés borrar a ${players[i]}?`);
		const filteredPlayers = players.filter((el, i) => el[i] !== i);
		setPlayers(filteredPlayers);
	};

	const handleScoreChange = () => setScore([score]);

	const handleSubmit = () => {
		if (player.length) {
			setPlayers([...players, player]);
			setPlayer('');
		}
	};

	return (
		<View style={style.container}>
			<Text style={style.title}>Lista de jugadores</Text>
			{/* <KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={style.inputContainer}
			> */}
			<TextInput
				style={style.input}
				placeholder='Nombre jugador'
				value={player}
				onChangeText={text => setPlayer(text)}
				// onSubmitEditing={handleSubmit}
			/>
			{/* <TouchableOpacity onPress={handleSubmit} style={style.btnDate}>
				<Text style={style.btnDateText}>Agregar</Text>
			</TouchableOpacity> */}
			<Button title='Agregar' onPress={handleSubmit} />
			{/* <TextInput
					style={style.input}
					placeholder='Valor jugador'
					// value={score}
					keyboardType='number-pad'
					onChange={handleScoreChange}
				/> */}
			{/* </KeyboardAvoidingView> */}
			<View style={style.textContainer}>
				{/* <FlatList /> */}
				{players &&
					players.map((el, i) => (
						<Text
							style={style.textList}
							key={i}
							onPress={(e, i) => namePress(e, i)}
						>
							{`${i + 1}. ${el}`}
						</Text>
					))}
			</View>
		</View>
	);
};

export default PlayerScreen;
