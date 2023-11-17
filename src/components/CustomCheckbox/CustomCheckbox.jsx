import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomCheckbox = ({
	control,
	label,
	icon,
	onChange,
	checked,
	name,
	rules,
}) => {
	return (
		// <Controller
		// 	control={control}
		// 	name={name}
		// 	rules={rules}
		// 	render={({
		// 		field: { value, onChange, onBlur },
		// 		fieldState: { error },
		// 	}) => (
		<View style={styles.checkbox_container}>
			<Text style={styles.checkbox_label}>{label}</Text>
			<Pressable
				style={[styles.checkbox_base, checked && styles.checkboxChecked]}
				onPress={onChange}
				// onBlur={onBlur}
			>
				{checked && <Ionicons name={icon} size={24} color='#fff' />}
			</Pressable>
		</View>
		// 	)}
		// ></Controller>
	);
};

const styles = StyleSheet.create({
	checkbox_container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		width: 250,
	},
	checkbox_base: {
		width: 24,
		height: 24,
		marginLeft: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderWidth: 2,
		borderColor: '#fff',
		backgroundColor: 'transparent',
	},
	checkboxChecked: {
		backgroundColor: '#27CD2E85',
	},
	checkbox_label: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default CustomCheckbox;
