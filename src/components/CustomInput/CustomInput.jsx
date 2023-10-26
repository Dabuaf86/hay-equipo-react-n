import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
	control,
	name,
	rules,
	placeholder,
	secureTextEntry,
}) => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error },
			}) => (
				<>
					<View
						style={[
							styles.inputContainer,
							{ borderColor: error ? 'red' : '#e8e8e8' },
						]}
					>
						<TextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={placeholder}
							style={styles.input}
							secureTextEntry={secureTextEntry}
						/>
					</View>
					{error && (
						<Text
							style={{ color: 'red', fontWeight: 'bold', alignSelf: 'center' }}
						>
							{error.message || 'Error'}
						</Text>
					)}
				</>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: '#ffffff75',
		width: 300,
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 10,
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		color: '#000',
		fontSize: 18,
	},
});

export default CustomInput;
