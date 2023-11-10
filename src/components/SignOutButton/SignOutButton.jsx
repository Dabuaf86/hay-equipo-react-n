import { Text, StyleSheet, View } from 'react-native';
import { FIREBASE_AUTH } from '../../../firebase-config';

const SignOutButton = () => {
	const auth = FIREBASE_AUTH;

	const signOut = () => {
		auth.signOut();
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text} onPress={signOut}>
				Salir
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 50,
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	text: {
		fontSize: 16,
		color: '#F32B0F85',
		textDecorationLine: 'underline',
	},
});

export default SignOutButton;
