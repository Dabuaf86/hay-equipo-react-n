import { Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomButton = ({
	onPress,
	text,
	type = 'primary',
	bgColor,
	fontColor,
	width = 300,
	icon,
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
			{icon ? <Icon name={icon} color='#FFF' size={30} /> : null}
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
		flexDirection: 'row',
		padding: 10,
		borderRadius: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	container_primary: {
		backgroundColor: '#27CD2E85',
	},
	container_tertiary: {
		backgroundColor: '#F32B0F85',
	},
	container_secondary: {
		borderColor: '#f37a1d',
		borderWidth: 2,
	},
	container_link: {
		backgroundColor: '#FFFFFF00',
	},
	text_primary: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	text_tertiary: {
		fontSize: 18,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	text_secondary: {
		fontSize: 18,
		color: '#f37a1d',
		fontWeight: 'bold',
	},
	text_link: {
		fontSize: 16,
		color: '#ffffff',
		textDecorationLine: 'underline',
	},
});

export default CustomButton;
