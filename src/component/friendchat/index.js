import React, { Component } from "react";

import { Button } from "react-bootstrap";

import Chat from "./chat";
import ChatItem from "./chatItem";

export default class FriendChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatList: [],
      rightMargin: -245
    };
  }

  selectF(friend) {
    if (this.state.chatList.indexOf(friend) > -1) {
      return;
    }

    this.setState(prevState => ({
      chatList: prevState.chatList.concat(friend),
      rightMargin: prevState.rightMargin + 320
    }));
  }

  handleClose(friendToClose) {
    var newChatList = this.state.chatList;
    var index = newChatList.indexOf(friendToClose);
    newChatList.splice(index, 1);
    this.setState({ chatList: newChatList });
  }

  render() {
    const val = this.state.rightMargin;
    return (
      <div>
        <Chat selectF={this.selectF.bind(this)} />
        {this.state.chatList.map(name => {
          return (
            <ChatItem
              name={name}
              rightMargin={this.state.rightMargin}
              key={name.id}
              handleClose={this.handleClose.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}
