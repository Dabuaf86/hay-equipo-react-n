import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BGI = require('../../../assets/futbol_2.jpg');

const resultados = [
	{
		fecha: '10/11/2023',
		lista: 'x1',
		resultado: 'equipo1',
	},
	{
		fecha: '17/11/2023',
		lista: 'x2',
		resultado: 'equipo2',
	},
	{
		fecha: '24/11/2023',
		lista: 'x3',
		resultado: 'equipo1',
	},
	{
		fecha: '01/12/2023',
		lista: 'x4',
		resultado: 'empate',
	},
	{
		fecha: '08/12/2023',
		lista: 'x5',
		resultado: 'equipo2',
	},
	{
		fecha: '15/12/2023',
		lista: 'x6',
		resultado: 'equipo1',
	},
];

const OutcomeScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Resultados</Text>
					<View style={styles.list}>
						{resultados &&
							resultados.map(resultado => (
								<View style={styles.content} key={resultado.lista}>
									<Text style={styles.content_text}>{resultado.fecha}: </Text>
									<Text style={styles.content_text}>{resultado.resultado}</Text>
									<Icon name='magnify' color='#FFF' size={20} />
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

export default OutcomeScreen;
