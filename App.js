import { Provider } from 'react-redux';
import store from './store';
import LogInNavigation from './src/navigation/LogInNavigation';

function App() {
	return (
		<Provider store={store}>
			<LogInNavigation />
		</Provider>
	);
}

export default App;
