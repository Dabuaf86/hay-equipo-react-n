import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import useAuth from '../hooks/useAuth';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';

const RootNavigation = ({ navigation }) => {
	const [animating, setAnimating] = useState(true);
	const { user } = useAuth();

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setAnimating(false);

	// 		// AsyncStorage.getItem('user').then(value => {
	// 		navigation.replace(user === null ? 'AuthNavigation' : 'UserNavigation');
	// 		// });
	// 	}, 5000);
	// }, []);

	return user ? <UserNavigation /> : <AuthNavigation />;
	// return (
	// 	<View style={styles.container}>
	// 		<Image
	// 			source={require('../../assets/futbol_3.jpg')}
	// 			style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
	// 		/>
	// 		<ActivityIndicator
	// 			animating={animating}
	// 			color='#e82d2d'
	// 			size='large'
	// 			style={styles.activityIndicator}
	// 		/>
	// 	</View>
	// );
};

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		backgroundColor: '"307ECC',
// 	},
// 	activityIndicator: {
// 		alignItems: 'center',
// 		height: 80,
// 	},
// });

export default RootNavigation;
