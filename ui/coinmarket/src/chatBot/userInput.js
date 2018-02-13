import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SendIcon from './icons/SendIcon';
import _ from 'lodash';
import './ChatClass.css';
import NumberInput from './InputType/numberInput';
import TextInput from './InputType/textInput';

export default class UserInput extends Component {

  constructor(props) {
    super(props);
    this.state ={
      lastProp : _.last(props.obj.chatData)
    }
  }

  renderView(){
    debugger;
    if(this.state.lastProp){
    switch(this.state.lastProp){
      case "number" :
        return  <NumberInput obj={this.props} />
      default : 
        return <TextInput obj={this.props} />
    }
  }
    else{
      return <TextInput obj={this.props} />
    }
  }

  render() {
    return (
          this.renderView()
    );
  }
}
