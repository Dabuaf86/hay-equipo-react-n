import { useState } from 'react';
import {
	Image,
	ImageBackground,
	View,
	Text,
	ScrollView,
	StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const BGI = require('../../../assets/futbol_1.png');

const SignUpScreen = () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	// const [passwordRepeat, setPasswordRepeat] = useState('');

	const navigation = useNavigation();
	const {
		control,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm();

	const passwordWatch = watch('password');

	const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
	const EMAIL_REGEX = /^[\w\.-]+@[\w\.-]+\.\w+$/;

	const onSignUp = data => {
		console.log(data);
		// Validate email and passwords

		navigation.navigate('ConfirmEmail');
	};

	const onSignIn = e => {
		navigation.navigate('SignIn');
	};

	const onTC = e => {
		console.warn('Ver términos y Condiciones');
	};

	const onPrivacy = e => {
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
