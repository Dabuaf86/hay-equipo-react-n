import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebase-config';

const auth = FIREBASE_AUTH;

const useAuth = () => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		const unsuscribeFromAuthStateChanged = onAuthStateChanged(auth, user => {
			user ? setUser(user) : setUser(null);
		});
		return unsuscribeFromAuthStateChanged;
	}, []);

	return {
		user,
	};
};

export default useAuth;
