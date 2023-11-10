import 'dotenv/config';
export default {
	expo: {
		name: 'react-native-futbol-app',
		slug: 'react-native-futbol-app',
		version: '1.0.0',
		orientation: 'portrait',
		icon: './assets/icon.png',
		splash: {
			image: './assets/splash.png',
			resizeMode: 'contain',
			backgroundColor: '#ffffff',
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ['**/*'],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: './assets/adaptive-icon.png',
				backgroundColor: '#FFFFFF',
			},
		},
		web: {
			favicon: './assets/favicon.png',
		},
		extra: {
			apiKey: process.env.API_KEY,
			authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
			databaseURL: process.env.EXPO_PUBLIC_DB_URL,
			projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
			storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
			messagingSenderId: process.env.MESSAGING_SENDER_ID,
			appId: process.env.EXPO_PUBLIC_APP_ID,
		},
	},
};
