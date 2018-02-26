import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom';
// import './semantic/dist/semantic.min.css';
import './index.css';
 import App from './App';
 import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>, 
	document.getElementById('root'));

registerServiceWorker();
