import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import OutcomeScreen from '../screens/OutcomeScreen/OutcomeScreen';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import TeamsScreen from '../screens/TeamsScreen/TeamsScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const InsideNavigation = () => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator
				initialRouteName='Acerca'
				screenOptions={({ route }) => ({
					tabBarActiveTintColor: '#27CD2E',
					tabBarInactiveTintColor: '#545151',
					headerTitleAlign: 'center',
					headerShown: false,
					headerTitleStyle: {
						color: '#27CD2E',
					},
					// headerStyle: {
					// 		backgroundColor: '#833471',
					// },
					// tabBarStyle: {
					// 	backgroundColor: '#833471',
					// },
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
				})}
			>
				<Tab.Screen name='Principal' component={HomeScreen} />
				<Tab.Screen name='Jugadores' component={PlayerScreen} />
				<Tab.Screen name='Equipos' component={TeamsScreen} />
				<Tab.Screen name='Resultados' component={OutcomeScreen} />
				<Tab.Screen name='Acerca' component={AboutScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default InsideNavigation;
