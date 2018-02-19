import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import '.././ChatClass.css';
import * as actions from '../../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as commonFunc from '.././commonFunc';
import { DatePicker, DatePickerInput } from 'rc-datepicker';
import moment from 'moment';
import 'rc-datepicker/lib/style.css';

class NumberInput extends Component {

  constructor(props) {
    super(props);
    this.state ={
      lastProp : _.last(props.obj.chatData),
      inputTitle:"",
      selectedDate: new Date()
    }
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(date) {
    this.setState({
      selectedDate: date
    });
  }


  onSend(evt) {
    var error = "";
    var type = "email" 
    const {actions}=this.props;
    commonFunc.onSend(evt, this.props, this.state.selectedDate.toString(), error, type)
  }


  render() {
    const today = new Date();
    return (
        <div>
          <div>
              <DatePickerInput
                  onChange={this.onChange}
                  value={this.state.selectedDate}
                  className='my-custom-datepicker-component sc-user-input--text'
              />

              {/* this renders only a fixed datepicker */}
              <DatePicker onChange={this.onChange} value={this.state.selectedDate} />
          </div>
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
)(NumberInput)
