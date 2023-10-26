import { View, StyleSheet } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';

const SocialSignInButtons = () => {
	const onSignUpFB = e => {
		console.warn('Registrarse con Facebook');
	};

	const onSignUpGoogle = e => {
		console.warn('Registrarse con Google');
	};

	const onSignUpApple = e => {
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
