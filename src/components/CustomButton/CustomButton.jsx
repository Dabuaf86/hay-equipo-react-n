import { Pressable, Text, StyleSheet } from 'react-native';

const CustomButton = ({
	onPress,
	text,
	type = 'primary',
	bgColor,
	fontColor,
	width = 300,
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={[
				styles.container,
				styles[`container_${type}`],
				bgColor ? { backgroundColor: bgColor } : {},
				{ width },
			]}
		>
			<Text
				style={[styles[`text_${type}`], fontColor ? { color: fontColor } : {}]}
			>
				{text}
			</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: 10,
		borderRadius: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	container_primary: {
		backgroundColor: '#27CD2E85',
	},
	container_secondary: {
		backgroundColor: '#F32B0F85',
	},
	container_link: {
		backgroundColor: '#FFFFFF00',
	},
	text_primary: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	text_link: {
		fontSize: 16,
		color: '#ffffff',
		textDecorationLine: 'underline',
	},
});

export default CustomButton;
