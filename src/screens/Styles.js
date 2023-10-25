import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'black',
	},
	title: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#27CD2E85',
	},
	imgContainer: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
	},
	btnContainer: {
		flex: 2,
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%',
		marginBottom: 5,
	},
	btn_primary: {
		backgroundColor: '#27CD2E85',
		padding: 10,
		borderRadius: 50,
		width: 250,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn_fb: {
		backgroundColor: '#3B5998',
		padding: 10,
		borderRadius: 50,
		width: 250,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btn_google: {
		backgroundColor: '#F32B0F',
		padding: 10,
		borderRadius: 50,
		width: 250,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		fontSize: 16,
		color: '#ffffff',
		fontWeight: 'bold',
	},
	inputContainer: {
		flex: 2,
	},
	input: {
		backgroundColor: 'white',
		padding: 10,
		marginBottom: 5,
		borderRadius: 25,
		borderColor: 'limegreen',
		borderWidth: 2,
	},
	textContainer: {
		flex: 4,
		width: '20%',
		backgroundColor: 'transparent',
		justifyContent: 'space-evenly',
	},
	textList: {
		color: 'limegreen',
		alignSelf: 'center',
	},
	pickedDateContainer: {
		padding: 10,
		backgroundColor: 'black',
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	pickedDate: { fontSize: 15, color: 'limegreen' },
	datePicker: {
		width: 320,
		height: 260,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
	btnDateContainer: {
		flex: 7,
		width: '20%',
		alignSelf: 'center',
		marginTop: 5,
	},
	btnDate: {
		backgroundColor: 'limegreen',
		padding: 10,
		borderRadius: 100,
		alignSelf: 'center',
	},
	btnDateText: {
		fontSize: 18,
		color: 'white',
		fontWeight: 'bold',
	},
});

export default style;
