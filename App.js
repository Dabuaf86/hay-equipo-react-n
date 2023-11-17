import { Provider } from 'react-redux';
import store from './store';
import RootNavigation from './src/navigation';

function App() {
	return (
		<Provider store={store}>
			<RootNavigation />
		</Provider>
	);
}

export default App;
