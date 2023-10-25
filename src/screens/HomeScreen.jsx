import React, { useState } from 'react';
import {
	Image,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
} from 'react-native';
import style from './Styles';
import Icon from 'react-native-vector-icons//MaterialCommunityIcons';
// import DateTimePicker from '@react-native-community/datetimepicker';

const HomeScreen = () => {
	const handleLogin = credentials => {};

	const handleFBLogin = fbObj => {};

	const handleGoogleLogin = googleObj => {};

	return (
		<View style={style.container}>
			<View style={style.imgContainer}>
				<ImageBackground
					style={style.img}
					source={require('../../assets/futbol_2.jpg')}
				>
					<Text style={style.title}>Hay equipo!</Text>

					<View style={style.btnContainer}>
						<TouchableOpacity style={style.btn_fb} onPress={handleFBLogin}>
							<Text style={style.btnText}>
								<Image source={{ uri: '../assets/Facebook F.svg' }} />
								{/* <Icon name='facebook' size={16} color='#fff' /> */}
								ingresar con Facebook
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={style.btn_google}
							onPress={handleGoogleLogin}
						>
							<Text style={style.btnText}>
								<Icon name='google' size={16} color='#fff' />
								ingresar con Google
							</Text>
						</TouchableOpacity>
					</View>
					<View style={style.btnContainer}>
						<TouchableOpacity style={style.btn_primary} onPress={handleLogin}>
							<Text style={style.btnText}>ingresar</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		</View>
	);
};

export default HomeScreen;
