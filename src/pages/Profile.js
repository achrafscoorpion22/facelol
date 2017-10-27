import React, { Component } from "react";

export default class Profile extends Component {
    
  render() {
 
    
    
  return (
  
    <div class="container">
        <div className="cadre">
        <div class="fb-profile">
            <img align="left" class="fb-image-lg" src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/16142561_1396825030368915_2561193169003175237_n.jpg?oh=4b8d12a9d32bc8bb5f5148c73a82cf4d&oe=5A645FBB" alt="Profile image example"/>
            <img align="left" class="fb-image-profile thumbnail" src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/21231643_1653978394653576_3776291800751053715_n.jpg?oh=93d1b065bfc948c4a4c17e0557e99f2b&oe=5A6E29F6" alt="Profile image example"/>
            <div class="fb-profile-text">
                <h1>souhaib eljaziri</h1>
                <p><div>{this.props.params.id}</div></p>
            </div>
        </div>
        <div class="maincontent">
        
<div class="icon-bar">
  <a class="active" href="#"><i>Journal</i></a> 
  <a href="#"><i>Apropos</i></a> 
  <a href="#"><i>Amis</i></a> 
  <a href="#"><i>photo</i></a>
    </div>
</div>
</div>

        <div class="container2">
  <form action="" method="GET">
    <div class="form-group">
      <textarea class="enter-post" placeholder=" Type something here.."></textarea>
    </div>
  </form>
  <div class='btn-group'>
    <p class='counter'>140</p>
    <button type="submit" class="btn-post">Post</button>
  </div>
  
  <ul class="posts2">
  
  </ul>
</div>


</div>
    );
  }
  
}
