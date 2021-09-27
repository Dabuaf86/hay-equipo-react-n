import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDLFz4idqODEVtWedHg37m-jWj_kZN_ZFk',
	authDomain: 'react-native-futbol-app.firebaseapp.com',
	databaseURL: 'https://react-native-futbol-app-default-rtdb.firebaseio.com',
	projectId: 'react-native-futbol-app',
	storageBucket: 'react-native-futbol-app.appspot.com',
	messagingSenderId: '25314621924',
	appId: '1:25314621924:web:ba35e76f6d7dc6a70deff1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
	firebase,
	db,
};
