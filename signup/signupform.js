import React, { Component } from 'react';
import axios from 'axios';
class Signupform extends Component{
    constructor(props) {
        super(props);
        this.state={
            username:'',
            email:'',
            password:'',
            passwordconfirm:''

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    }
    onSubmit(e){
        e.perventDefault();
        axios.post('/api/users',{user:this.state});
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>username</label>
                    <input 
                    value={this.state.username}
                    onChange={this.onChange}
                    type="text"
                    name="username"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input 
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    name="email"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input 
                    value={this.state.password}
                    onChange={this.onChange}
                    type="password"
                    name="password"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>passwordconfirm</label>
                    <input 
                    value={this.state.passwordconfirm}
                    onChange={this.onChange}
                    type="password"
                    name="passwordconfirm"
                    className="form-control"
                    />
                </div>
                <div>
                    <button>
                        signup
                    </button>
                </div>

            </form>
        );
    }
} 
export default Signupform;