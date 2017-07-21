import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCa3dI7EUAV43oxFIpqYyn2xqSEuCjv7HY'


const App = () => ( 
	<div>
		<SearchBar />
	</div> 
)

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.getElementById('container'));

