import { useState, useEffect } from 'react';
import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustomButton from '../../components/CustomButton/CustomButton';

const BGI = require('../../../assets/futbol_2.jpg');

const lista_7 = [
	{
		id: '001',
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
		id: '002',
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
		id: '003',
		name: 'Nicolás Lorences',
		alias: 'Mariscal',
		position: 'defense',
		is_goalKeeper: true,
		is_passer: true,
		defense: 7,
		attack: 5,
		average: 6,
		winning_ratio: '',
	},
	{
		id: '004',
		name: 'Fernando Garagoli',
		alias: 'Fer',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 5,
		attack: 9,
		average: 7,
		winning_ratio: '',
	},
	{
		id: '005',
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
		id: '006',
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
		id: '007',
		name: 'Leandro Garagoli',
		alias: 'Lean',
		position: 'mid_field',
		is_goalKeeper: true,
		is_passer: true,
		defense: 7,
		attack: 9,
		average: 8,
		winning_ratio: '',
	},
	{
		id: '008',
		name: 'Pablo Banchero',
		alias: 'Pancho',
		position: 'defense',
		is_goalKeeper: true,
		is_passer: true,
		defense: 8,
		attack: 7,
		average: 7.5,
		winning_ratio: '',
	},
	{
		id: '009',
		name: 'Rodrigo',
		alias: 'Rodri',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 7,
		attack: 10,
		average: 8.5,
		winning_ratio: '',
	},
	{
		id: '010',
		name: 'Amigo de Pablo',
		alias: 'Amigo de Pablo',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 7,
		attack: 8,
		average: 7.5,
		winning_ratio: '',
	},
	{
		id: '011',
		name: 'Tomás Olivieri',
		alias: 'Tomi',
		position: 'forward',
		is_goalKeeper: false,
		is_passer: true,
		defense: 6,
		attack: 8,
		average: 7,
		winning_ratio: '',
	},
	{
		id: '012',
		name: 'Matías',
		alias: 'Mati amigo de MET',
		position: 'mid_field',
		is_goalKeeper: false,
		is_passer: true,
		defense: 6,
		attack: 8,
		average: 7,
		winning_ratio: '',
	},
	{
		id: '013',
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
		id: '014',
		name: 'Nicolás Paulín',
		alias: 'Soretiten',
		position: 'defense',
		is_goalKeeper: false,
		is_passer: true,
		defense: 8,
		attack: 7,
		average: 7.5,
		winning_ratio: '',
	},
];

const PlayersListScreen = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [list, setList] = useState([]);

	const navigation = useNavigation();

	useEffect(() => {
		// setLoading(true);
		setList(lista_7);
		// setLoading(false);
	}, []);

	const onEdit = async () => {
		navigation.navigate('CreatePlayer');
	};

	const onAddPlayer = async () => {
		if (loading) return;
		setLoading(true);
		try {
		} catch (error) {
			console.log(error);
			Alert.alert('Algo salió mal');
		} finally {
			setLoading(false);
			Alert.alert('Jugador agregado con éxito');
		}
	};

	const deleteId = id => {
		setList(list => list.filter(player => player.id != id));
	};

	const customAlertBtn = id =>
		Alert.alert(
			'Eliminar jugador?',
			'Seguro deseas eliminar a este jugador de la lista?',
			[
				{
					text: 'cancelar',
					onPress: () => {
						return null;
					},
					style: 'cancel',
				},
				{
					text: 'si',
					onPress: () => {
						deleteId(id);
					},
				},
			],
			{
				cancelable: true,
				onDismiss: () => {
					return null;
				},
			}
		);

	const onDeletePlayer = async playerId => {
		if (loading) return;
		setLoading(true);
		try {
			customAlertBtn(playerId);
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			Alert.alert('Algo salió mal');
		} finally {
			setLoading(false);
			// Alert.alert('Jugador eliminado con éxito');
		}
	};

	const Item = ({ item }) => {
		const { alias, id } = item;
		return (
			<View style={styles.player_list}>
				<Text style={styles.player_name}>{alias}</Text>
				<View style={styles.button_container}>
					<CustomButton width={50} icon='plus' onPress={onAddPlayer} />
					<CustomButton
						width={50}
						icon='pencil'
						onPress={onEdit}
						type='secondary'
					/>
					<CustomButton
						width={50}
						icon='minus'
						onPress={() => onDeletePlayer(id)}
						type='tertiary'
					/>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<ImageBackground style={styles.img} source={BGI}>
				<Text style={styles.title}>Lista de jugadores</Text>
				<ScrollView
					showsVerticalScrollIndicator={false}
					contentContainerStyle={styles.content_container}
				>
					{list && list.map(item => <Item item={item} key={item.id} />)}
				</ScrollView>
				{/* <FlatList
					data={list}
					renderItem={({ item }) => <Item item={item.alias} />}
					keyExtractor={item => item.id}
				/> */}
			</ImageBackground>
		</View>
	);
};

export default PlayersListScreen;

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
	player_list: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	content_container: {
		width: '75%',
		marginLeft: 20,
	},
	player_name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFF',
	},
	button_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: 150,
	},
});
