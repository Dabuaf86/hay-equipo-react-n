import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName='SignIn'
			>
				<Stack.Screen name='SignIn' component={SignInScreen} />
				<Stack.Screen name='SignUp' component={SignUpScreen} />
				<Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
				<Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
				<Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AuthNavigation;
