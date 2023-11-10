import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BGI = require('../../../assets/futbol_2.jpg');

const jugadores = [
	{
		jugador: 'Jugador 1',
		alias: 'Pela',
		average: '6',
	},
	{
		jugador: 'Jugador 2',
		alias: 'Gusti',
		average: '5',
	},
	{
		jugador: 'Jugador 3',
		alias: 'MET',
		average: '4',
	},
	{
		jugador: 'Jugador 4',
		alias: 'Marianito',
		average: '7',
	},
	{
		jugador: 'Jugador 5',
		alias: 'Tincho',
		average: '7',
	},
	{
		jugador: 'Jugador 6',
		alias: 'Pancho',
		average: '7',
	},
];
const TeamsScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Armar equipos</Text>
					<View style={styles.list}>
						{jugadores &&
							jugadores.map(jugador => (
								<View style={styles.content}>
									<Text style={styles.content_text}>{jugador.jugador}: </Text>
									<Text style={styles.content_text}>{jugador.alias} - </Text>
									<Text style={styles.content_text}>{jugador.average}</Text>
									<Icon name='pencil' color='#FFF' size={20} />
									<Icon name='trash-can' color='#ce1616' size={20} />
								</View>
							))}
					</View>
				</ImageBackground>
			</View>
		</ScrollView>
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
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	title: {
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: 'limegreen',
		marginTop: 40,
	},
	logoContainer: {
		alignItems: 'center',
		padding: 20,
	},
	logo: {
		// width: '70%',
		maxWidth: 40,
		maxHeight: 40,
	},
	list: {},
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 50,
	},
	content_text: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
});

export default TeamsScreen;
