import React, { Component } from "react";
import {
  Form,
  Col,
  FormGroup,
  Button,
  Checkbox,
  Well,
  Thumbnail,
  FormControl
} from "react-bootstrap";

export default class Post extends Component {
  render() {
    return (
      <Well>
        <h3>{this.props.data.userid}</h3>
        {this.props.data.type == "text" ? (
          <p>{this.props.data.content}</p>
        ) : (
          <iframe
            style={{
              width: "100%",
              height: "321px"
            }}
            src={this.props.data.content}
            frameBorder="0"
            allowFullScreen
          />
        )}
        <p>
          <Button bsStyle="primary">{this.props.data.likes} likes</Button>&nbsp;
        </p>
      </Well>
    );
  }
}
