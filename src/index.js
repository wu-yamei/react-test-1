import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import Home from './home.js';
import Main from './main.js';
import Share from './share.js';
// import registerServiceWorker from './registerServiceWorker';

const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
		        <Route path="/home/:t" component={Home} />
		       	<Route path="/main/:t" component={Main}/>
		       	<Route path="/share/" component={Share}/>
	       	</div>
		</BrowserRouter>
	)
};

ReactDOM.render(<App/>, document.getElementById('root'));
// registerServiceWorker();	    