import React from 'react'
import {
	BrowserRouter as Router,
  	Link
} from 'react-router-dom'


class Header extends React.Component {
	render(){
		return (
			<header className="App-header">
	         <h1 className="App-title">Welcome to Xcdify coin market</h1>
				<Router>
		          <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/report">Report</Link></li>
			      </ul>
		        </Router>
	        </header>
        )
	}
}

export default Header;