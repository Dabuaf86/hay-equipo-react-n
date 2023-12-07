import React, { useState, useEffect } from 'react';
import {
	Alert,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomCheckbox from '../../components/CustomCheckbox';
import CustomSlider from '../../components/CustomSlider/CustomSlider';

const BGI = require('../../../assets/futbol_2.jpg');
// const ICON_IMG = require('../../../assets/Facebook F.png');

const CreatePlayerScreen = () => {
	// const [players, setPlayers] = useState([]);
	const [player, setPlayer] = useState({
		name: '',
		alias: '',
		position: '',
		defense: defense,
		attack: attack,
		isGoalKeeper: goalkeeperChecked,
		isPasser: isPasserChecked,
		average: 0,
	});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [goalkeeperChecked, setGoalkeeperChecked] = useState(false);
	const [isPasserChecked, setIsPasserChecked] = useState(true);
	const [defense, setDefense] = useState(player.defense);
	const [attack, setAttack] = useState(player.attack);

	useEffect(() => {
		let total = (defense + attack) / 2;
		total = player.isGoalKeeper ? +1 : null;
		total = !player.isPasser ? -0.5 : null;
		setPlayer({ ...player, average: total });
	}, [goalkeeperChecked, isPasserChecked, defense, attack]);

	const { height, width } = useWindowDimensions();
	const navigation = useNavigation();
	const { control, handleSubmit } = useForm();

	// let api = helpFetch();
	// const URL = 'http://localhost:3001/players';

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

	// const createData = data => {
	// 	const options = {
	// 		body: data,
	// 		headers: { 'content-type': 'application/json' },
	// 	};
	// 	api.post(URL, options).then(res => {
	// 		if (!res.err) setPlayers([...players, data]);
	// 		else setError(res);
	// 	});
	// };

	// const updateData = data => {
	// 	const endpoint = `${URL}/${data.id}`;
	// 	const options = {
	// 		body: data,
	// 		headers: { 'content-type': 'application/json' },
	// 	};
	// 	api.put(endpoint, options).then(res => {
	// 		if (!res.err) {
	// 			let newData = players.map(player =>
	// 				player.id === data.id ? data : player
	// 			);
	// 			setPlayers(newData);
	// 		} else setError(res);
	// 	});
	// };

	// const deleteData = id => {
	// 	const isDelete = window.confirm(
	// 		`Estás seguro de querer borrar el jugador #'${id}'?`
	// 	);

	// 	if (isDelete) {
	// 		const endpoint = `${URL}/${id}`;
	// 		const options = {
	// 			headers: { 'content-type': 'application/json' },
	// 		};
	// 		api.del(endpoint, options).then(res => {
	// 			if (!res.err) {
	// 				let newData = players.filter(el => el.id !== id);
	// 				setPlayers(newData);
	// 			} else setError(res);
	// 		});
	// 	} else return;
	// };

	// const namePress = (player, i) => {
	// 	console.log('EEEEEEEEEEE', i);
	// 	console.log('PLAYERS', players);
	// 	Alert.alert(`Seguro que querés borrar a ${players[i]}?`);
	// 	const filteredPlayers = players.filter((player, i) => player[i] !== i);
	// 	setPlayers(filteredPlayers);
	// };

	const onCancel = async () => {
		navigation.navigate('player-list');
	};

	const onCreatePlayer = async () => {
		setLoading(true);
		try {
			console.log('Creando jugador');
		} catch (error) {
			console.log(error);
			Alert.alert('Ups! Algo falló: ' + error.message);
		} finally {
			setLoading(false);
		}
		navigation.navigate('player-list');
	};

	const handleChange = (name, value) => {
		setPlayer({ ...player, [name]: value });
	};

	const positionEnum = [
		{ label: 'Arquero', value: 'goal_keeper' },
		{ label: 'Defensor', value: 'defense' },
		{ label: 'Mediocampista', value: 'mid_field' },
		{ label: 'Delantero', value: 'forward' },
	];

	return (
		<View style={styles.container}>
			<ImageBackground style={styles.img} source={BGI}>
				<Text style={styles.title}>Crear jugador</Text>
				<View style={styles.player_container}>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						style={styles.form_container}
					>
						<CustomInput
							control={control}
							label='Nombre'
							name='name'
							width={width * 0.6}
							placeholder='Nombre'
							rules={{
								required: 'Debe agregar un nombre al jugador',
							}}
							value={player.name}
							onChangeText={handleChange}
						/>
						<CustomInput
							control={control}
							label='Alias'
							name='alias'
							width={width * 0.6}
							placeholder='Alias'
							rules={{
								required: 'Si no tiene un alias, repite el nombre del jugador',
							}}
							value={player.alias}
							onChangeText={handleChange}
						/>
						<View style={styles.picker_container}>
							<Picker
								selectedValue={player.position}
								onValueChange={position => {
									setPlayer({ ...player, position });
								}}
								style={styles.picker}
								mode='dialog'
								prompt='Posición'
								dropdownIconColor='#fff'
								dropdownIconRippleColor='#27CD2E95'
								itemStyle={{ color: '#f37a1d', fontWeight: 'bold' }}
							>
								{positionEnum &&
									positionEnum.map((item, i) => {
										return (
											<Picker.Item
												label={item.label}
												value={item.value}
												key={i}
											/>
										);
									})}
							</Picker>
						</View>
						<CustomSlider
							tag='defense'
							// icon={ICON_IMG}
							label='Defensa'
							onChange={value => setDefense(value)}
							value={defense}
						/>
						<CustomSlider
							// icon={ICON_IMG}
							tag='attack'
							label='Ataque'
							onChange={value => setAttack(value)}
							value={attack}
						/>
						<CustomCheckbox
							tag='isGoalKeeper'
							label='Ataja?'
							icon='checkmark'
							onChange={() => setGoalkeeperChecked(!goalkeeperChecked)}
							checked={goalkeeperChecked}
						/>
						<CustomCheckbox
							tag='isPasser'
							label='Es de pasarla?'
							icon='checkmark'
							onChange={() => setIsPasserChecked(!isPasserChecked)}
							checked={isPasserChecked}
						/>
						<View style={styles.input_container}>
							<Text style={styles.input}>Promedio: {player.average}</Text>
						</View>
					</KeyboardAvoidingView>
				</View>
				<View style={styles.button_container}>
					<CustomButton
						text='Crear jugador'
						onPress={handleSubmit(onCreatePlayer)}
					/>
					<CustomButton text='Cancelar' onPress={onCancel} type='tertiary' />
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	img: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		resizeMode: 'cover',
	},
	title: {
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: 'limegreen',
		marginTop: 40,
	},
	player_container: {
		alignItems: 'center',
		// padding: 40,
	},
	form_container: {
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input_container: {
		backgroundColor: '#00000075',
		width: 300,
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 10,
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	button_container: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	picker_container: {
		backgroundColor: '#ffffff75',
		width: 300,
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 10,
		marginVertical: 5,
		// alignItems: 'center',
		justifyContent: 'center',
	},
	picker: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default CreatePlayerScreen;

{
	/* <View style={styles.textContainer}>
				{<FlatList />
				{players &&
					players.map((player, i) => (
						<Text
							style={styles.textList}
							key={i}
							onPress={(player, i) => namePress(player, i)}
						>
							{`${i + 1}. ${player}`}
						</Text>
					))}
			</View> */
}
