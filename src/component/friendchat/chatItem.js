import React, { Component } from 'react'
import { Button,Modal,FormControl,Form,FormGroup,Glyphicon } from 'react-bootstrap'
import { NavItem,Image } from 'react-bootstrap'
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
    const imgstyle = {
      width : '60px' , 
      height : '60px' ,
      backgroundSize: 'cover'
    }
    const myStyle = {
      right : this.state.right
    }
    return (

      <div className="chat-item" style={myStyle}>
        <div class="wrapper">
        <div class="phone-containter">
        <div id="phone" class="phone">
        <Modal.Header>       
   
        <Button bsSize="small" class="send-btn"  onClick={this.handleClose.bind(this) }><Glyphicon glyph="remove" /> </Button>
        <Button bsSize="small" class="send-btn"  onClick={this.handleMinimize.bind(this) }><Glyphicon glyph="minus" /> </Button>
         <Image style={imgstyle} src={"https://orig00.deviantart.net/8078/f/2013/336/5/d/league_of_legends_icon_by_theman4556-d6wic5y.png"} circle thumbnail/>
{this.props.name} 
   
      </Modal.Header>
      </div>
      <div id="phone" class="phone">
      <div class="message left"><div class="message-text">hi !
    </div></div>
      {
        this.state.isShow &&
        <div>
          <Modal.Body>
        
          
            {
              this.state.messages.map((onemes)=>{
                return <div class="message right"><div class="message-text"><p key={onemes.id}> {onemes} </p> </div></div>
              })
            }
         </Modal.Body>
          <Modal.Footer>
          <div class="send-container">
      <form id="send">
      
     


       <input
          type="text"
          id="msgInput"
          class="send-input" placeholder="Message"
          value={this.state.value}
          placeholder="Enter text"
          onChange={this.handleChange.bind(this)}
          />
          <Button bsStyle="info" class="send-btn" onClick={this.handleSubmit.bind(this)}>Envoyer</Button>
          </form>
 
          </div>
          
          </Modal.Footer>
          </div>
          
          
         
        
      }
      </div>
</div>
</div>
  </div>
    )
  }
}
