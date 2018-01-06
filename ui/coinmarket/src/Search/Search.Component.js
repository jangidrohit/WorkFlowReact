import React from 'react';
import './Search.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onFilter(event.target.value);
      }


    render() {
        return (
            <div className="filter-option">
                <label>Filter
                </label>
                <select onChange={this.handleChange} className="form-control" value={this.state.value} >
                    <option></option>
                    <option value="sale">Sale</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
        )
    }
}
export default Search;