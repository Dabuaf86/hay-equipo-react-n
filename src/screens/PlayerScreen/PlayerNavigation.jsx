import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreatePlayerScreen from './CreatePlayerScreen';
import PlayersListScreen from './PlayersListScreen';

const Stack = createNativeStackNavigator();

const PlayerNavigation = () => {
	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName='Players'
			>
				<Stack.Screen name='Players' component={PlayersListScreen} />
				<Stack.Screen name='CreatePlayer' component={CreatePlayerScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default PlayerNavigation;
