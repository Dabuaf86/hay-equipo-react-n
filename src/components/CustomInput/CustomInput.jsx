import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
	control,
	label,
	name,
	width,
	rules,
	placeholder,
	secureTextEntry,
	autoCapitalize = 'none',
	keyboardType = 'default',
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
					<Text style={[styles.text_base, styles.label, { width }]}>
						{label}
					</Text>
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
							style={[styles.text_base, styles.input]}
							secureTextEntry={secureTextEntry}
							autoCapitalize={autoCapitalize}
							keyboardType={keyboardType}
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
	text_base: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
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
		width: '100%',
		textAlign: 'center',
	},
	label: {
		textAlign: 'center',
		// borderColor: '#e8e8e8',
		// borderWidth: 1,
	},
});

export default CustomInput;
