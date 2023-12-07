import {
	Alert,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { FIREBASE_AUTH } from '../../../firebase-config';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BGI = require('../../../assets/futbol_1.png');

const ConfirmEmailScreen = () => {

	const route = useRoute();
	const navigation = useNavigation();
	const { control, handleSubmit, watch } = useForm({
		defaultValues: route?.params?.email,
	});

	const email = watch('email');

	const auth = FIREBASE_AUTH;

	const EMAIL_REGEX = /^[\w\.-]+@[\w\.-]+\.\w+$/;

	const onConfirm = async data => {
		const { email, confirmationCode } = data;
		try {
			const response = await auth.confirmSignUp(email, confirmationCode);
			console.log(response);
			navigation.navigate('InsideNavigation');
		} catch (error) {
			Alert.alert('Ups!', error.message);
		}
		// Validate email and code
		navigation.navigate('Home');
	};

	const onResend = async () => {
		try {
			await auth.resendSignUp(email);
			Alert.alert(
				'El código de confirmación ha sido enviado a su correo con éxito'
			);
		} catch (error) {
			Alert.alert('Ups!', error.message);
		}
	};

	const onSignIn = () => {
		navigation.navigate('SignIn');
	};

	// const handleChange = (name, value) => {
	// 	name === 'email'
	// 		? setEmail(value.trim())
	// 		: setConfirmationCode(value.trim());
	// };

	return (
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Confirmar Registro</Text>
					<View style={styles.login_container}>
						<View style={styles.form_login}>
							<CustomInput
								control={control}
								name='email'
								placeholder='Email'
								value={email}
								// onChangeText={handleChange}
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
								name='confirmation-code'
								placeholder='Código de confirmación'
								value={confirmationCode}
								// onChangeText={handleChange}
								rules={{ required: 'Debes ingresar el código recibido' }}
							/>
							<CustomButton
								onPress={handleSubmit(onConfirm)}
								text='Confirmar'
							/>
							<CustomButton
								onPress={onResend}
								text='Reenviar Código'
								type='secondary'
							/>
							<CustomButton
								onPress={onSignIn}
								text='Volver al Inicio'
								type='link'
								width={150}
								fontColor={'limegreen'}
							/>
						</View>
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
		justifyContent: 'center',
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
		marginBottom: 340, // Ver de corregir esto para que sea automático
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
	text: {
		color: '#e8e8e8',
		marginVertical: 5,
	},
	highlight_text: {
		color: '#f37a1d',
		fontWeight: 'bold',
	},
});

export default ConfirmEmailScreen;
