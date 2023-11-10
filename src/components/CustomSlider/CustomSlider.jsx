import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const CustomSlider = ({ label, icon, onChange, value, name }) => {
	return (
		<View style={styles.slider_container}>
			<Text style={styles.slider_label}>
				{label}: {value}
			</Text>
			<Slider
				maximumValue={10}
				step={1}
				minimumTrackTintColor='#fff'
				maximumTrackTintColor='#000'
				style={{ width: 300 }}
				// thumbImage={{ uri: icon }}
				onValueChange={onChange}
				thumbTintColor='limegreen'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	slider_container: {
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		width: 250,
	},
	slider_base: {
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
	slider_label: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 18,
	},
});

export default CustomSlider;
