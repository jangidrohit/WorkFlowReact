import React from 'react'

class Report extends React.Component {
	
	render(){
		const { match} = this.props
    	var name = match.params.name
		
		return (
			<div>
			Report Name :  {name} 
			</div>
        )
	}
}

export default Report;