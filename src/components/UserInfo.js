import React, { Component } from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
      username: "",
      linkedToken: ""
    };
    this.props.keycloak.loadUserInfo().then(userInfo => { 
        this.setState({name: userInfo.name, email: userInfo.email, id: userInfo.sub, username: userInfo.username, idTokenParsed: props.keycloak.idTokenParsed.linked_contact})
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <p>Username: {this.state.username}</p>
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Linked contact id: {this.state.idTokenParsed}</p>
        <p>ID: {this.state.id}</p>
      </div>
    );
  }
}
export default UserInfo;