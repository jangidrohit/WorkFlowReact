import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './Chat';
import launcherIcon from '../images/IconsError.jpg';
import launcherIconActive from '../images/IconsError.jpg';
import './launcher.css';
import ChatBot from './Chat'

class Launcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      launcherIcon,
      isOpen: true
    };
  }

  componentWillReceiveProps(newProps){
    if(newProps.isOpen == true){
      this.state.isOpen = true
    }
  } 

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: false,
      });
    }
  }



  render() {
    const isOpen = this.state.isOpen;
    const classList = [
      'sc-launcher',
      (isOpen ? 'opened' : 'hide'),
    ];
    return (
      <div className={classList.join(' ')}>
        <p>Chat</p>
        <ChatBot 
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}

Launcher.propTypes = {
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func
};

export default Launcher;
