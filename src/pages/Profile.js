import React, { Component } from "react";

export default class Profile extends Component {
    
  render() {
 
    Array.remove = function(array, from, to) {
        var rest = array.slice((to || from) + 1 || array.length);
        array.length = from < 0 ? array.length + from : from;
        return array.push.apply(array, rest);
    };

    var total_popups = 0; 
    var popups = [];
    function close_popup(id)
    {
        for(var iii = 0 ; iii < popups.length ; iii++)
        {
            if(id == popups[iii])
            {
                Array.remove(popups, iii);
                
                document.getElementById(id).style.display = "none";
                
                calculate_popups();
                
                return;
            }
        }   
    }

    //displays the popups. Displays based on the maximum number of popups that can be displayed on the current viewport width
    function display_popups()
    {
        var right = 220;
        
        var iii = 0;
        for(iii; iii < total_popups; iii++)
        {
            if(popups[iii] != undefined)
            {
                var element = document.getElementById(popups[iii]);
                element.style.right = right + "px";
                right = right + 320;
                element.style.display = "block";
            }
        }
        
        for(var jjj = iii; jjj < popups.length; jjj++)
        {
            var element = document.getElementById(popups[jjj]);
            element.style.display = "none";
        }
    }
    
    //creates markup for a new popup. Adds the id to popups array.
    function register_popup(id, name)
    {
        
        for(var iii = 0; iii < popups.length; iii++)
        {   
            //already registered. Bring it to front.
            if(id == popups[iii])
            {
                Array.remove(popups, iii);
            
                popups.unshift(id);
                
                calculate_popups();
                
                
                return;
            }
        }               
        
        var element = '<div class="popup-box chat-popup" id="'+ id +'">';
        element = element + '<div class="popup-head">';
        element = element + '<div class="popup-head-left">'+ name +'</div>';
        element = element + '<div class="popup-head-right"><a href="javascript:close_popup(\''+ id +'\');">&#10005;</a></div>';
        element = element + '<div style="clear: both"></div></div><div class="popup-messages"></div></div>';
        
        document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;  

        popups.unshift(id);
                
        calculate_popups();
        
    }
    
    //calculate the total number of popups suitable and then populate the toatal_popups variable.
    function calculate_popups()
    {
        var width = window.innerWidth;
        if(width < 540)
        {
            total_popups = 0;
        }
        else
        {
            width = width - 200;
            //320 is width of a single popup box
            total_popups = parseInt(width/320);
        }
        
        display_popups();
        
    }
    
    //recalculate when window is loaded and also when window is resized.
    window.addEventListener("resize", calculate_popups);
    window.addEventListener("load", calculate_popups);
    
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
<div class="chat-sidebar">
            <div class="sidebar-name">          
                <a  href="javascript:{register_popup('souhaib-eljaziri','Souhaib Eljaziri')}">
                    <img width="30" height="30" src="https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/21231643_1653978394653576_3776291800751053715_n.jpg?oh=93d1b065bfc948c4a4c17e0557e99f2b&oe=5A6E29F6" alt="Profile image example" />
                    <span>Souhaib Eljaziri</span>
                </a>
            </div>
            <div class="sidebar-name">
                <a href="javascript:register_popup('achraf','Achraf Arrami');">
                    
                    <img width="30" height="30" src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/10406885_812175115484323_1447076135505654561_n.jpg?oh=aae1129c0afe2922ad13f32cecdf4ef1&oe=5A84D7FC" />
                    <span>Achraf Arrami</span>
                </a>
            </div>
            <div class="sidebar-name">
                <a href="javascript:register_popup('omar','OMar BoRji');">
                    <img width="30" height="30" src="https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/22228130_1568400853224229_6877345719220076839_n.jpg?oh=d7161548d757c3246d558262f9a496b9&oe=5A6C5501" />
                    <span>OMar BoRji</span>
                </a>
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
