import React, { Component } from 'react'
import { NavItem,Image } from 'react-bootstrap'

export default class FriendItem extends Component {
    constructor(props){
        super(props)
    }

    handleclick(e){
        e.preventDefault()
        this.props.selectF(this.props.data.name)
    }
  render() {
    const imgstyle = {
        width : '60px' , 
        height : '60px' ,
        backgroundSize: 'cover'
      }
    return (
        <NavItem eventKey={1} href="/home" onClick={this.handleclick.bind(this)} >
             <Image style={imgstyle} src={this.props.data.imgurl} circle thumbnail/>
        </NavItem>
    )
  }
}
