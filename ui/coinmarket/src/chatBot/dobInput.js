import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _ from 'lodash';
import '.././ChatClass.css';
import * as actions from '../../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class NumberInput extends Component {

  constructor(props) {
    super(props);
    this.state ={
      lastProp : _.last(props.obj.chatData),
          inputTitle:"",
    }
  }

  onSend(evt) {
    const {actions}=this.props;
    actions.onChangeInput(this.refs.inputTitle);
    this.refs.inputTitle = ""
  }


  render() {
    return (
        <div>
          <input type="number" id="chatbox" className="sc-user-input--text"
          ref={el => this.inputTitle = el}
          placeholder="Please enter text" onChange={(e)=>{this.onChangeHandler(e)}}/>

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
