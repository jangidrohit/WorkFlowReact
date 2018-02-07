import React, { Component } from 'react'


class Message extends Component {

  _renderMessageOfType(type) {
        return 
  }

  render () {
    let contentClassList = [
      (this.props.message.author === "Me" ? "sent" : "Received")
    ];
    return (
        <div className={contentClassList}>
          <div className="sc-message--text">
            {this.props.message.text}
          </div>
        </div>
        )
  }
}

export default Message