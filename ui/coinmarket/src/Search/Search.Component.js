import React from 'react';

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
            <div>
                <label>Filter
                {/* <input type=""  value={this.state.value} onChange={this.handleChange} /> */}
                </label>
                <select onChange={this.handleChange} value={this.state.value} >
                    <option></option>
                    <option value="sale">Sale</option>
                    <option value="buy">Buy</option>
                </select>
            </div>
        )
    }
}
export default Search;