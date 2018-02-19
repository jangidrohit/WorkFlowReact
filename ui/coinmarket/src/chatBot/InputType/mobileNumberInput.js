import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import '.././ChatClass.css';
import * as actions from '../../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as commonFunc from '.././commonFunc';
import Phone, {
  formatPhoneNumber,
  parsePhoneNumber,
  isValidPhoneNumber
} from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import { isValidNumber} from 'libphonenumber-js';

class mobileNumberInput extends Component {

  constructor(props) {
    super(props);
    this.state ={
      lastProp : _.last(props.obj.chatData),
      inputTitle:"",
      numberError:"",
      phone:''
    }
  }

  onSend(evt) {
  	var error = '';
  	var type = 'number';
    const {actions}=this.props;
    if(this.state.phone && !this.state.numberError){
	    commonFunc.onSend(evt, this.props, this.state.phone, error , type)
    	this.state.value = "";
    }
  }

  isValidPhoneNumber(value){
  	if(/^[0-9)(+_-]+$/.test(value)){
  		if(isValidNumber(value)){
	  		this.setState({
	  			phone: value,
	  			numberError: ''
	  		})
  		}
  		else{
  			this.setState({
  				numberError: 'Invalid phone number'
  			})
  		}
  	}	
  }

  render() {
  	const { value } = this.state
    return (
        <div>
			<Phone
			className = "mobileNumberInput"
			placeholder="Enter phone number"
			value={ this.state.phone }
			onChange={ phone => this.isValidPhoneNumber(phone) }
			error={this.state.numberError}
			indicateInvalid/>

          <input name="submitmsg" type="submit"  id="submitmsg" className="sc-user-input--send-icon-wrapper" onClick={(e)=>{this.onSend(e)}} value="Send" />    
        </div>
    );
  }
}




const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
    return {
        formData: state
    };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mobileNumberInput)







