import React, { Component } from "react";
import { Nav, NavItem, Image } from "react-bootstrap";
import FriendItem from "./friendItem";
const connectedf = [
  {
    name: "achraf",
    imgurl:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/10406885_812175115484323_1447076135505654561_n.jpg?oh=aae1129c0afe2922ad13f32cecdf4ef1&oe=5A84D7FC"
  },
  {
    name: "omar",
    imgurl:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/22228130_1568400853224229_6877345719220076839_n.jpg?oh=082adccb62488eb3d90adeae29e8abc7&oe=5A44C801"
  },
  {
    name: "ousamma",
    imgurl:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/18301169_1712476602112706_528424410107453298_n.jpg?oh=c788055aa7e4a7ed974dee8de8fe012f&oe=5A7F1C69"
  }
  ,
  {
    name: "souhaib",
    imgurl:
      "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/21231643_1653978394653576_3776291800751053715_n.jpg?oh=93d1b065bfc948c4a4c17e0557e99f2b&oe=5A6E29F6"
  }
];

export default class Chat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mystyle = {
      width: "80px",
      top: "50px",
      right: 0,
      position: "fixed"
    };

    return (
      <Nav bsStyle="pills" stacked style={mystyle}>
        {connectedf.map(val => {
          return <FriendItem data={val} selectF={this.props.selectF} />;
        })}
      </Nav>
    );
  }
}
