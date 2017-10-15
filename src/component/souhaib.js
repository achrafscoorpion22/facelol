import React, { Component } from 'react'
import {Button} from 'react-bootstrap'
export default class Souhaib extends Component {
    constructor(props) {
      super(props)
    this.state={
        x:'souhaib'
    }
    
    
    }
       
    affiche(){
       this.setState({x:this.props.name })

    }

    
  render() {
    return (
      <div>
         <Button bsStyle="primary" onClick={this.affiche.bind(this)}>{this.state.x}</Button>
         
      </div>
    )
  }
}
