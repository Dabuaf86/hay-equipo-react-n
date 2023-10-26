import { useState } from 'react';
import {
	Image,
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import Logo from '../../../assets/tiro_2.jpg';
const BGI = require('../../../assets/futbol_1.png');

const SignInScreen = () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	const { height } = useWindowDimensions();
	const navigation = useNavigation();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSignIn = data => {
		console.log(data);
		// Validate user

		navigation.navigate('Home');
	};

	const onForgotPassword = e => {
		navigation.navigate('ForgotPassword');
	};

	const onSignUp = e => {
		navigation.navigate('SignUp');
	};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					{/* <View style={styles.logoContainer}>
						<Image
							source={Logo}
							style={[styles.logo, { height: height * 0.3 }]}
							resizeMode='contain'
						/>
					</View> */}
					<Text style={styles.title}>Ingresar</Text>
					<View style={styles.login_container}>
						<SocialSignInButtons />
						<View style={styles.form_login}>
							<CustomInput
								control={control}
								name='email'
								placeholder='Email'
								rules={{ required: 'Debes ingresar tu email' }}
							/>
							<CustomInput
								control={control}
								name='password'
								placeholder='Password'
								secureTextEntry
								rules={{
									required: 'Debes ingresar una contraseña válida',
								}}
							/>
							<CustomButton onPress={handleSubmit(onSignIn)} text='Ingresar' />
							<CustomButton
								onPress={onForgotPassword}
								text='Recuperar contraseña'
								type='link'
							/>
							<View style={styles.anchor_text_container}>
								<Text style={styles.anchor_text}>No tienes una cuenta?</Text>
								<CustomButton
									onPress={onSignUp}
									text='Registrate acá'
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
		padding: 40,
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