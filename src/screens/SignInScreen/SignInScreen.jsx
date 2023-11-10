import { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { FIREBASE_AUTH } from '../../../firebase-config';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

import Logo from '../../../assets/tiro_2.jpg';
const BGI = require('../../../assets/futbol_2.jpg');

const SignInScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const { height, width } = useWindowDimensions();
	const navigation = useNavigation();
	const {
		control,
		handleSubmit,
	} = useForm();

	const auth = FIREBASE_AUTH;
	console.log('QUÉ TRAE AUTH: ', auth);

	const onSignIn = async () => {
		if (loading) return;
		setLoading(true);
		try {
			const response = await auth.signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			console.log(response);
		} catch (error) {
			console.log(error);
			Alert.alert('Ups! Algo falló: ' + error.message);
		} finally {
			setLoading(false);
		}

		navigation.navigate('InsideNavigation');
	};

	const onForgotPassword = e => {
		navigation.navigate('ForgotPassword');
	};

	const onSignUp = e => {
		navigation.navigate('SignUp');
	};

	// const handleChange = (name, value) => {
	// 	name === 'email' ? setEmail(value.trim()) : setPassword(value.trim());
	// 	console.log(name, ': ', value);
	// };

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.container}>
				<ImageBackground style={styles.img} source={BGI}>
					<View style={styles.logoContainer}>
						<Image
							source={Logo}
							style={[styles.logo, { height: height * 0.3 }]}
							resizeMode='contain'
						/>
					</View>
					<Text style={styles.title}>Ingresar</Text>
					<View style={styles.login_container}>
						<SocialSignInButtons />
						<KeyboardAvoidingView behavior='padding'>
							<View style={styles.form_login}>
								<CustomInput
									control={control}
									name='email'
									label='Email'
									width={width * 0.6}
									placeholder='Email'
									// onChangeText={handleChange}
									rules={{ required: 'Debes ingresar tu email' }}
								/>
								<CustomInput
									control={control}
									name='password'
									label='Contraseña'
									width={width * 0.6}
									placeholder='Contraseña'
									// onChangeText={handleChange}
									secureTextEntry
									rules={{
										required: 'Debes ingresar una contraseña válida',
									}}
								/>
								<CustomButton
									onPress={handleSubmit(onSignIn)}
									text={loading ? 'Cargando...' : 'Ingresar'}
								/>
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
						</KeyboardAvoidingView>
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
