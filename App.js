import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import PlayerScreen from './components/PlayerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './reducers/store';

const Tab = createBottomTabNavigator();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='Home'
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let iconName;
							if (route.name === 'Principal') {
								iconName = focused ? 'football' : 'football-outline';
							} else if (route.name === 'Jugadores') {
								iconName = focused ? 'people' : 'people-outline';
							}
							return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'limegreen',
						tabBarInactiveTintColor: 'gray',
						headerTitleAlign: 'center',
						headerTitleStyle: {
							color: 'limegreen',
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
					<Tab.Screen name='Principal' component={HomeScreen} />
					<Tab.Screen name='Jugadores' component={PlayerScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
