import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
	databaseURL: process.env.EXPO_PUBLIC_DB_URL,
	projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
	storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.EXPO_PUBLIC_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
	firebase,
	db,
};
