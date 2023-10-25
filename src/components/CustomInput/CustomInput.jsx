import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={value}
				onChange={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#ffffff75',
		width: 300,
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 50,
		height: 50,
		paddingHorizontal: 10,
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		color: 'white',
		fontSize: 18,
	},
});

export default CustomInput;
