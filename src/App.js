import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route path='/home'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
