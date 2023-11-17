import { View, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import { FIREBASE_AUTH } from '../../../firebase-config';
import {
	getAuth,
	getRedirectResult,
	GoogleAuthProvider,
	signInWithRedirect,
} from 'firebase/auth';

const SocialSignInButtons = () => {
	const provider = new GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

	const auth = FIREBASE_AUTH;
	// const auth = getAuth();
	auth.useDeviceLanguage();

	const onSignUpFB = () => {
		console.warn('Registrarse con Facebook');
	};

	const onSignUpGoogle = () => {
		signInWithRedirect(auth, provider);

		getRedirectResult(auth)
			.then(result => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
				console.log('USER: ', user, 'TOKEN: ', token);
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
	};

	const onSignUpApple = () => {
		console.warn('Registrarse con Apple');
	};
	return (
		<View style={styles.federal_login}>
			<CustomButton
				onPress={onSignUpFB}
				text='Ingresar con Facebook'
				bgColor='#4765A9'
				icon='facebook'
			/>
			<CustomButton
				onPress={onSignUpGoogle}
				text='Ingresar con Google'
				bgColor='#F32B0F'
				icon='google'
			/>
			<CustomButton
				onPress={onSignUpApple}
				text='Ingresar con Apple'
				bgColor='#000'
				icon='apple'
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	federal_login: {
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default SocialSignInButtons;
