import useAuth from '../hooks/useAuth';
import AuthNavigation from './AuthNavigation';
import UserNavigation from './UserNavigation';

const RootNavigation = () => {
	const { user } = useAuth();

	return user ? <UserNavigation /> : <AuthNavigation />;
};

export default RootNavigation;
