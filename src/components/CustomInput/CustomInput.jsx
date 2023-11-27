import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({
	control,
	label,
	name,
	icon,
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
					{/* <Text style={[styles.text_base, styles.label, { width }]}>
						{label}
					</Text> */}
					<View
						style={[
							styles.inputContainer,
							{ borderColor: error ? 'red' : '#e8e8e8' },
						]}
					>
						{icon ? <Icon name={icon} style={styles.icon} /> : null}
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
		color: '#FFFFFF',
		fontSize: 18,
		fontWeight: 'bold',
	},
	inputContainer: {
		backgroundColor: '#FFFFFF75',
		width: 300,
		borderColor: '#E8E8E8',
		borderWidth: 1,
		borderRadius: 50,
		height: 40,
		paddingHorizontal: 20,
		marginVertical: 5,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
	},
	icon: {
		paddingHorizontal: 10,
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 20,
	},
	input: {
		flex: 1,
		textAlign: 'center',
	},
	label: {
		textAlign: 'center',
		// borderColor: '#E8E8E8',
		// borderWidth: 1,
	},
});

export default CustomInput;
