import { useState } from 'react';
import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../../firebase-config';
import Icon from 'react-native-vector-icons/FontAwesome';

import CustomButton from '../../components/CustomButton/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { version, aboutText, linkObj } from './aboutContent';
import { Pressable } from 'react-native';

const BGI = require('../../../assets/futbol_1.png');
const BGI2 = require('../../../assets/futbol_2.jpg');

const HomeScreen = () => {
	const [loading, setLoading] = useState(false);

	const auth = FIREBASE_AUTH;

	const customAlertBtn = () =>
		Alert.alert(
			'Salir?',
			'Deseas cerrar tu sesión?',
			[
				{
					text: 'Cancel',
					onPress: () => {
						return null;
					},
					style: 'cancel',
				},
				{
					text: 'OK',
					onPress: () => {
						AsyncStorage.clear();
						signOut(auth);
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

	const onSignOut = async () => {
		if (loading) return;
		setLoading(true);
		try {
			customAlertBtn();
			setLoading(false);
		} catch (error) {
			console.log(error.message);
			Alert.alert('Algo salió mal');
		}
	};

	return (
		<View style={styles.container}>
			<ImageBackground style={styles.img} source={BGI}>
				<Text style={styles.title}>Home</Text>
				<View>
					<View style={styles.about_content}>
						<Text style={styles.version_text}>hay-equipo ver {version}</Text>
					</View>
				</View>
				<View style={styles.about_content}>
					<Text style={styles.about_text}>{aboutText}</Text>
				</View>
				<View>
					{linkObj &&
						linkObj.map(link => {
							return (
								<Pressable
									style={styles.content}
									key={link.name}
									onPress={() => open(link.content)}
								>
									<Icon
										name={link.icon}
										color='limegreen'
										size={30}
										style={{ paddingRight: 10 }}
									/>
									<Text style={styles.content_text}>
										{link['short-content']}
									</Text>
								</Pressable>
							);
						})}
				</View>
				<View style={styles.btn_container}>
					<CustomButton
						text='Salir'
						onPress={onSignOut}
						type='tertiary'
						icon='exit-to-app'
						width={150}
					/>
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
		justifyContent: 'space-evenly',
		resizeMode: 'cover',
	},
	title: {
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: 'limegreen',
		marginTop: 40,
	},
	btn_container: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
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
	about_content: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 50,
	},
	content: {
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 20,
	},
	version_text: {
		color: 'white',
		fontSize: 16,
		fontStyle: 'italic',
	},
	about_text: {
		color: 'white',
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'justify',
		width: '80%',
	},
	content_text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default HomeScreen;
