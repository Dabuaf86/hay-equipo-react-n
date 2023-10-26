import { useState } from 'react';
import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const BGI = require('../../../assets/futbol_1.png');

const ForgotPasswordScreen = () => {
	// const [email, setEmail] = useState('');

	const navigation = useNavigation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const EMAIL_REGEX = /^[\w\.-]+@[\w\.-]+\.\w+$/;

	const onSend = email => {
		console.log(email);
		// Validate email

		navigation.navigate('ResetPassword');
	};

	const onSignIn = e => {
		navigation.navigate('SignIn');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<Text style={styles.title}>Enviar Código</Text>
					<View style={styles.login_container}>
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
							<CustomButton
								onPress={handleSubmit(onSend)}
								text='Enviar Código'
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

export default ForgotPasswordScreen;
