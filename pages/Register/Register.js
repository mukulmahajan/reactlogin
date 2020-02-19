import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Register.scss";
import {emailChanged,passwordChanged,userChanged,createUser} from '../../actions/example/actionCreators';

class Register extends Component {
  
onNameChange(text){
  this.props.userChanged(text);
  console.log(text);
}
onEmailChange(text){
  this.props.emailChanged(text);
}
onPassChange(text){
  this.props.passwordChanged(text);
}
onConfPassChange(text){
  this.props.passwordChanged(text);
}

onSubmit(){
    
  const {username, email, password } = this.props;
  this.props.createUser({username, email, password });
}





  render(){
    return (
      <div>
      <form   onSubmit={this.onSubmit.bind(this)}>
        <div className="container">
          <label ><b>Username</b></label>
          <input 
          type="text" 
          placeholder="Enter Username"
           name="username"  
           onChange={this.onNameChange.bind(this)}
           value={this.props.username}
           />
          <label ><b>Email</b></label>
          <input 
          type="text" 
          placeholder="email" 
          name="email" 
          onChange={this.onEmailChange.bind(this)}
           value={this.props.email}
          />
          <label ><b>Password</b></label>
          <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange={this.onPassChange.bind(this)}
           value={this.props.password}
          />
          <label ><b>Repeat Passwor</b></label>
          <input 
          type="password"
           placeholder="Repeat Passwor" 
           name="password" 
           onChange={this.onConfPassChange.bind(this)}
           value={this.props.password}
           />
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label> */}
          <button type="submit">Login</button>
          
        </div>
      </form>
    </div>
    )
  }
  
}

const mapStateToProps = ({auth}) => {
  const { email, password,username }=auth;
  return { email,password,username };
};



export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  createUser,
  userChanged
})(Register);
