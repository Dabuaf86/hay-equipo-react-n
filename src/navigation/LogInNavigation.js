import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import InsideNavigation from './InsideNavigation';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { FIREBASE_AUTH } from '../../firebase-config';

const Stack = createNativeStackNavigator();

const LogInNavigation = () => {
	const [user, setUser] = useState(undefined);

	const checkUser = async () => {
		try {
			const authUser = await onAuthStateChanged(FIREBASE_AUTH, user => {
				console.log('USER: ', user);
				setUser(user);
				setUser(authUser);
			});
		} catch (error) {
			setUser(null);
		}
	};

	// Pasar la lógica del contexto del usuario y el auth a un hook de contexto y pasarlo como prop al navigation.

	useEffect(() => {
		checkUser();
	}, []);

	// if (!user) {
	// 	return (
	// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
	// 			<ActivityIndicator />
	// 		</View>
	// 	);
	// }

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName='SignIn'
			>
				{user ? (
					<InsideNavigation />
				) : (
					<>
						<Stack.Screen name='SignIn' component={SignInScreen} />
						<Stack.Screen name='SignUp' component={SignUpScreen} />
						<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
						<Stack.Screen
							name='ForgotPassword'
							component={ForgotPasswordScreen}
						/>
						<Stack.Screen
							name='ResetPassword'
							component={ResetPasswordScreen}
						/>
						<Stack.Screen
							name='InsideNavigation'
							component={InsideNavigation}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default LogInNavigation;
