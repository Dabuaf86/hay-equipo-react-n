import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store';

import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen/PlayerScreen';
import TeamScreen from './src/screens/TeamScreen/TeamScreen';
import OutcomeScreen from './src/screens/OutcomeScreen/OutcomeScreen';
import AboutScreen from './src/screens/AboutScreen/AboutScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='Home'
					screenOptions={({ route }) => ({
						tabBarIcon: ({ color, size }) => {
							let iconName;
							iconName =
								route.name === 'Principal'
									? 'soccer'
									: route.name === 'Jugadores'
									? 'account-group'
									: route.name === 'Equipos'
									? 'soccer-field'
									: route.name === 'Resultados'
									? 'counter'
									: 'information';
							return <Icon name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: '#27CD2E',
						tabBarInactiveTintColor: '#545151',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: '#27CD2E',
							// backgroundColor: 'black',
						},
						// headerStyle: {
						// 		backgroundColor: '#833471',
						// },
						// tabBarStyle: {
						// 	backgroundColor: '#833471',
						// },
					})}
				>
					<Tab.Screen name='Principal' component={SignInScreen} />
					<Tab.Screen name='Jugadores' component={PlayerScreen} />
					<Tab.Screen name='Equipos' component={TeamScreen} />
					<Tab.Screen name='Resultados' component={OutcomeScreen} />
					<Tab.Screen name='Acerca' component={AboutScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
