import { useState } from 'react';
import {
	Alert,
	ImageBackground,
	View,
	Text,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { FIREBASE_AUTH } from '../../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const BGI = require('../../../assets/futbol_2.jpg');

const SignUpScreen = () => {
	const [loading, setLoading] = useState(false);

	const navigation = useNavigation();
	const { control, handleSubmit, watch } = useForm();

	const passwordWatch = watch('password');

	const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
	const EMAIL_REGEX = /^[\w\.-]+@[\w\.-]+\.\w+$/;

	const auth = FIREBASE_AUTH;

	const onSignUp = async data => {
		const { email, password } = data;

		if (loading) return;

		setLoading(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user;
				console.log(user);
				// navigation.navigate('ConfirmEmail', { email });
			})
			.catch(error => {
				const errorCode = error.code;
				// const errorMessage = error.message;
				// console.log(`${errorCode}: ${errorMessage}`);
				Alert.alert(`${errorCode}`); // CREAR UN SWITCH PARA MOSTRAR LOS ERRORES AL USUARIO
			});
		setLoading(false);
	};

	const onSignIn = () => {
		navigation.navigate('SignIn');
	};

	const onTC = () => {
		console.warn('Ver términos y Condiciones');
	};

	const onPrivacy = () => {
		console.warn('Ver Política de Privacidad');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Registro</Text>
					<View style={styles.login_container}>
						<SocialSignInButtons />
						<View style={styles.form_login}>
							<CustomInput
								control={control}
								name='email'
								icon='at'
								label='Email'
								placeholder='Email'
								rules={{
									required: 'Debes ingresar tu email',
									pattern: {
										value: EMAIL_REGEX,
										message: 'Debes ingresar un email válido',
									},
								}}
							/>
							<CustomInput
								control={control}
								name='password'
								icon='lock'
								label='Contraseña'
								placeholder='Contraseña'
								secureTextEntry
								rules={{
									required: 'Debes ingresar una contraseña',
									pattern: {
										value: PASSWORD_REGEX,
										message:
											'La contraseña debe tener entre 8 y 15 caracteres y debe contener al menos una letra minúscula, una letra mayúscula y un número',
									},
								}}
							/>
							<CustomInput
								control={control}
								name='password-repeat'
								icon='lock'
								label='Repetir contraseña'
								placeholder='Repetir contraseña'
								secureTextEntry
								rules={{
									validate: value =>
										value === passwordWatch ||
										'Las contraseñas deben ser iguales',
								}}
							/>
							<CustomButton
								onPress={handleSubmit(onSignUp)}
								text='Registrarse'
							/>
							<Text style={styles.text}>
								Al registrarse, confirma que acepta nuestros{' '}
								<Text style={styles.highlight_text} onPress={onTC}>
									Términos y Condiciones
								</Text>{' '}
								y nuestra{' '}
								<Text style={styles.highlight_text} onPress={onPrivacy}>
									Política de Privacidad
								</Text>
							</Text>
							<View style={styles.anchor_text_container}>
								<Text style={styles.anchor_text}>Ya estás registrado?</Text>
								<CustomButton
									onPress={onSignIn}
									text='Ingresá acá'
									type='link'
									width={150}
								/>
							</View>
						</View>
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
	login_container: {
		alignItems: 'center',
		padding: 10,
	},
	form_login: {
		marginTop: 30,
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
	text: { color: '#e8e8e8', marginVertical: 5 },
	highlight_text: { color: '#f37a1d', fontWeight: 'bold' },
});

export default SignUpScreen;
