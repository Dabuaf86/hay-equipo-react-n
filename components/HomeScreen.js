import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	Platform,
} from 'react-native';
import style from './Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import CreateTeam from '../utils/CreateTeam';

const HomeScreen = () => {
	const [team1, setTeam1] = useState([]);
	const [team2, setTeam2] = useState([]);
	const [isDatePickerShown, setIsDatePickerShown] = useState(false);
	const [date, setDate] = useState(new Date(Date.now()));
	// const today = new Date().toLocaleDateString();

	const handleTeam1 = players => {
		console.log(team1);
		if (team2.length === 0 && team1.length === 0) {
			const newTeam = CreateTeam(players);
			setTeam1(newTeam);
		}
	};

	const handleRemain1 = players => {
		let remain = [];
		for (let i = 0; i < team2.length; i++) {
			for (let j = 0; j < players.length; j++) {
				if (!team2.includes(players[j]) && !remain.includes(players[j])) {
					remain.push(players[j]);
					setTeam1(remain);
				}
			}
		}
	};

	const handleTeam2 = players => {
		console.log(team2);
		if (team2.length === 0 && team1.length === 0) {
			const newTeam = CreateTeam(players);
			setTeam2(newTeam);
		}
	};

	const handleRemain2 = players => {
		let remain = [];
		for (let i = 0; i < team1.length; i++) {
			for (let j = 0; j < players.length; j++) {
				if (!team1.includes(players[j]) && !remain.includes(players[j])) {
					remain.push(players[j]);
					setTeam2(remain);
				}
			}
		}
	};

	const showPicker = () => setIsDatePickerShown(true);

	const onChange = (event, value) => {
		if (value) setDate(value);
		if (Platform.OS === 'android') setIsDatePickerShown(false);
	};

	return (
		<View style={style.container}>
			{/* <View style={style.imgContainer}> */}
			<ImageBackground
				style={style.img}
				source={require('../assets/ball-1368282_1920.jpg')}
			>
				<Text style={style.title}>Hay equipo!</Text>
				<View style={style.pickedDateContainer}>
					<Text style={style.pickedDate}>{date.toLocaleString()}</Text>
				</View>
				{!isDatePickerShown && (
					<View style={style.btnDateContainer}>
						<TouchableOpacity onPress={showPicker} style={style.btnDate}>
							<Text style={style.btnDateText}>Fecha</Text>
						</TouchableOpacity>
					</View>
				)}
				{isDatePickerShown && (
					<DateTimePicker
						value={date}
						mode={'date'}
						display={Platform.OS === 'ios' ? 'spinner' : 'default'}
						is24Hour={true}
						onChange={onChange}
						style={style.datePicker}
					/>
				)}
				<View style={style.btnContainer}>
					{team2.length > 0 ? (
						<TouchableOpacity style={style.btn} onPress={handleRemain1}>
							<Text style={style.btnText}>✅</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity style={style.btn} onPress={handleTeam1}>
							<Text style={style.btnText}>⚽</Text>
						</TouchableOpacity>
					)}
					{/* <View style={style.playersList}>
						{team1.map((el, i) => (
							<Text style={style.players} key={i}>
								{el}
							</Text>
						))}
					</View> */}
					{team1.length > 0 ? (
						<TouchableOpacity style={style.btn} onPress={handleRemain2}>
							<Text style={style.btnText}>✅</Text>
						</TouchableOpacity>
					) : (
						<TouchableOpacity style={style.btn} onPress={handleTeam2}>
							<Text style={style.btnText}>⚽</Text>
						</TouchableOpacity>
					)}
					{/* <View style={style.playersList}>
						{team2.map((el, i) => (
							<Text style={style.players} key={i}>
								{el}
							</Text>
						))}
					</View> */}
				</View>
			</ImageBackground>
			{/* </View> */}
		</View>
	);
};

export default HomeScreen;
