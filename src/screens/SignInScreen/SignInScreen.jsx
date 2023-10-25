import { useState } from 'react';
import {
	Image,
	ImageBackground,
	View,
	Text,
	ScrollView,
	StyleSheet,
	useWindowDimensions,
} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import Logo from '../../../assets/tiro_2.jpg';

const SignInScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { height } = useWindowDimensions();

	const onSignInPressed = e => {
		console.warn('Ingresar con tu mail');
	};

	const onSignInFBPressed = e => {
		console.warn('Ingresar con Facebook');
	};

	const onSignInGooglePressed = e => {
		console.warn('Ingresar con Google');
	};

	const onSignInApplePressed = e => {
		console.warn('Ingresar con Apple');
	};

	const onForgotPasswordPressed = e => {
		console.warn('Recordar contraseña');
	};

	const onSignUpPressed = e => {
		console.warn('Registrate acá');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<View style={styles.imgContainer}>
					<ImageBackground
						style={styles.img}
						source={require('../../../assets/futbol_1.png')}
					>
						{/* <View style={styles.logoContainer}>
						<Image
							source={Logo}
							style={[styles.logo, { height: height * 0.3 }]}
							resizeMode='contain'
						/>
					</View> */}
						<View style={styles.login_container}>
							<Text style={styles.title}>Hay equipo!</Text>
							<View style={styles.federal_login}>
								<CustomButton
									onPress={onSignInFBPressed}
									text='Ingresar con Facebook'
									bgColor='#4765a9'
								/>
								<CustomButton
									onPress={onSignInGooglePressed}
									text='Ingresar con Google'
									bgColor='#F32B0F'
								/>
								<CustomButton
									onPress={onSignInApplePressed}
									text='Ingresar con Apple'
									bgColor='#000'
								/>
							</View>

							<View style={styles.form_login}>
								<CustomInput
									value={username}
									setValue={setUsername}
									placeholder='Username'
								/>
								<CustomInput
									value={password}
									setValue={setPassword}
									placeholder='Password'
									secureTextEntry
								/>
								<CustomButton onPress={onSignInPressed} text='Ingresar' />
								<CustomButton
									onPress={onForgotPasswordPressed}
									text='Recuperar contraseña'
									type='link'
								/>
								<View style={styles.anchor_text_container}>
									<Text style={styles.anchor_text}>No tienes una cuenta?</Text>
									<CustomButton
										onPress={onSignUpPressed}
										text='Registrate acá'
										type='link'
										width={150}
									/>
								</View>
							</View>
						</View>
					</ImageBackground>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	img: {
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
	logoContainer: {
		alignItems: 'center',
		padding: 20,
	},
	logo: {
		width: '70%',
		maxWidth: 300,
		maxHeight: 100,
	},
	login_container: {
		alignItems: 'center',
		padding: 20,
	},
	federal_login: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	form_login: {
		marginTop: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	anchor_text_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	anchor_text: {
		color: 'white',
		fontSize: 16,
	},
});

export default SignInScreen;
