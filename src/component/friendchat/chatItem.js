import React, { Component } from 'react'
import { Button,Modal,FormControl,Form,FormGroup,Glyphicon } from 'react-bootstrap'

export default class ChatItem extends Component {
    constructor(props) {
      super(props)
    
      this.state = { 
        value:"",
        messages: [],
        right: this.props.rightMargin,
        isShow: true
         
      }
    }
    handleChange(event) {
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value)
        if (!this.state.value.length) {
          return;
        }
        
        this.setState((prevState) => ({
          messages: prevState.messages.concat(this.state.value),
          value: ''
        }));
      }

      handleClose (e){
        e.preventDefault()
        this.props.handleClose(this.props.name)
      }
      
      handleMinimize (e){
        e.preventDefault()
        this.setState({
          isShow: !this.state.isShow
        })
      }
  

  render() {
    const myStyle = {
      right : this.state.right
    }
    return (
      <div className="chat-item" style={myStyle}>
      <Modal.Header>{this.props.name}
        <Button bsSize="small" onClick={this.handleClose.bind(this) }><Glyphicon glyph="remove" /> </Button>
        <Button bsSize="small" onClick={this.handleMinimize.bind(this) }><Glyphicon glyph="minus" /> </Button>
       
      </Modal.Header>
      {
        this.state.isShow &&
        <div>
          <Modal.Body>
            {
              this.state.messages.map((onemes)=>{
                return <p key={onemes.id}> {onemes} </p>
              })
            }
          </Modal.Body>
          <Modal.Footer>
          <input
          type="text"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange.bind(this)}
          />
          <Button bsStyle="info" onClick={this.handleSubmit.bind(this)}>Envoyer</Button>
          </Modal.Footer>
        </div>
      }


  </div>
    )
  }
}
