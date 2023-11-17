import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { FIREBASE_AUTH } from '../../../firebase-config';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BGI = require('../../../assets/futbol_1.png');

const ResetPasswordScreen = () => {

	const navigation = useNavigation();
	const { control, handleSubmit, watch } = useForm();

	const auth = FIREBASE_AUTH;

	const passwordWatch = watch('password');

	const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;

	const onSubmit = async data => {
		const { email, code, password } = data;
		try {
			await auth.forgotPasswordSubmit(email, code, password);
			navigation.navigate('InsideNavigation');
		} catch (error) {
			Alert.alert('Ups! Algo salió mal', error.message);
		}

	};

	const onSignIn = () => {
		navigation.navigate('SignIn');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Resetear Contraseña</Text>
					<View style={styles.login_container}>
						<View style={styles.form_login}>
							<CustomInput
								control={control}
								name='code'
								placeholder='Código de Confirmación'
								rules={{ required: 'Debes ingresar el código recibido' }}
							/>
							<CustomInput
								control={control}
								name='new-password'
								placeholder='Nueva contraseña'
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
								name='new-password-repeat'
								placeholder='Repetir nueva contraseña'
								rules={{
									validate: value =>
										value === passwordWatch ||
										'Las contraseñas deben ser iguales',
								}}
							/>
							<CustomButton onPress={handleSubmit(onSubmit)} text='Confirmar' />
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
		marginBottom: 390, // Ver de corregir esto para que sea automático
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

export default ResetPasswordScreen;
