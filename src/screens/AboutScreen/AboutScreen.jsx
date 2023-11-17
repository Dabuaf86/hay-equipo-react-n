import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';

const BGI = require('../../../assets/futbol_2.jpg');
const version = '1.0';
const aboutText =
	'“Hay-equipo” es una app enteramente desarrollada en React Native por Daniel Abuaf con mucho ❤️ y dedicada al fútbol de los viernes con sus amigos.';

const AboutScreen = () => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Acerca</Text>
					<View style={styles.content}>
						<Text style={styles.version_text}>hay-equipo ver {version}</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.about_text}>{aboutText}</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.content_text}>Acerca de esta aplicación</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.content_text}>Acerca de esta aplicación</Text>
					</View>
					<View style={styles.content}>
						<Text style={styles.content_text}>Acerca de esta aplicación</Text>
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
	content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
	},
	version_text: {
		color: 'white',
		fontSize: 14,
		fontStyle: 'italic'
	},
	about_text: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'justify',
		width: '80%'
	},
	content_text: {
		color: 'white',
		fontSize: 16,
	},
});

export default AboutScreen;
