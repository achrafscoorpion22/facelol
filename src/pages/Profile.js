import React, { Component } from "react";

export default class Profile extends Component {
  render() {
  return (
  
    <div class="container">
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
<div class="chat-sidebar">
            <div class="sidebar-name">          
                <a href="javascript:register_popup('souhaib-eljaziri', 'Souhaib Eljaziri');">
                    <img width="30" height="30" src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/21231643_1653978394653576_3776291800751053715_n.jpg?oh=93d1b065bfc948c4a4c17e0557e99f2b&oe=5A6E29F6" alt="Profile image example" />
                    <span>Souhaib Eljaziri</span>
                </a>
            </div>
            <div class="sidebar-name">
                <a href="javascript:register_popup('achraf', 'Arrami');">
                    <img width="30" height="30" src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/10406885_812175115484323_1447076135505654561_n.jpg?oh=aae1129c0afe2922ad13f32cecdf4ef1&oe=5A84D7FC" />
                    <span>Achraf Arrami</span>
                </a>
            </div>
            <div class="sidebar-name">
                <a href="javascript:register_popup('Ô Màr', 'BôRji');">
                    <img width="30" height="30" src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/22228130_1568400853224229_6877345719220076839_n.jpg?oh=d7161548d757c3246d558262f9a496b9&oe=5A6C5501" />
                    <span>Ô Màr BôRji</span>
                </a>
            </div>
           
        </div>
</div>
    );
  }
  
}
