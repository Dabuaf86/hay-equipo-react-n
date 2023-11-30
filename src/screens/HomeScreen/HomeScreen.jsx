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

import CustomButton from '../../components/CustomButton/CustomButton';

const BGI = require('../../../assets/futbol_1.png');

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
					onPress: null,
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => signOut(auth) },
			],
			{
				cancelable: true,
				onDismiss: null,
			}
		);

	const onSignOut = async () => {
		if (loading) return;
		setLoading(true);
		try {
			customAlertBtn();
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Home</Text>
					<View style={styles.btn_container}>
						<CustomButton
							text='Salir'
							onPress={onSignOut}
							type='tertiary'
							icon='exit-to-app'
						/>
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
	},
	btn_container: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default HomeScreen;
