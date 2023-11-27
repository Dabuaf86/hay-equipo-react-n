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
		borderColor: '#F37A1D',
		borderWidth: 2,
	},
	container_link: {
		backgroundColor: '#FFFFFF00',
	},
	text_primary: {
		fontSize: 18,
		color: '#FFFFFF',
		fontWeight: 'bold',
	},
	text_tertiary: {
		fontSize: 18,
		color: '#FFFFFF',
		fontWeight: 'bold',
	},
	text_secondary: {
		fontSize: 18,
		color: '#F37A1D',
		fontWeight: 'bold',
	},
	text_link: {
		fontSize: 16,
		color: '#FFFFFF',
		textDecorationLine: 'underline',
	},
});

export default CustomButton;
