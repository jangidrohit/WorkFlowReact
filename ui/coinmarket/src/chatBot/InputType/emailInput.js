import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import '.././ChatClass.css';
import * as actions from '../../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as commonFunc from '.././commonFunc';
import Chat from '.././Chat'

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.state ={
      lastProp : _.last(props.obj.chatData),
      inputTitle:""
    }
  }

  onSend(evt) {
    debugger;
    var error = "";
    var type = "email" 
    const {actions, formData}=this.props;
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.inputTitle.value)){        
        error = false;

      }
      else{
        error = true;
      }
      commonFunc.onSend(evt, this.props, this.inputTitle.value,error, type) ;
      this.inputTitle.value = "";      
  }


  render() {
    return (
        <div>
          <input type="text" id="chatbox" className="sc-user-input--text"
          ref={el => this.inputTitle = el}
          placeholder="plese enter text"/>
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
)(TextInput)
