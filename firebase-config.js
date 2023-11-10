import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	initializeAuth,
	getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig = {
	apiKey: Constants.manifest?.extra?.apiKey,
	authDomain: Constants.manifest?.extra?.authDomain,
	databaseURL: Constants.manifest?.extra?.databaseURL,
	projectId: Constants.manifest?.extra?.projectId,
	storageBucket: Constants.manifest?.extra?.storageBucket,
	messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
	appId: Constants.manifest?.extra?.appId,
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
// export const PERSISTENT_APP = initializeAuth(FIREBASE_APP, {
// 	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
