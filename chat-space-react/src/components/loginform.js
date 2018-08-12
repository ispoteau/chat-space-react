import React from 'react'

class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsernameChange(event){
    this.setState({username: event.target.username})
  }
  handlePasswordChange(event){
    this.setState({password: event.target.password})

  }
  handleSubmit(event){

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="input-container centered">
          <div className="login-logo centered med-bottom-margin">Logo</div>
          <div className="input-sets">
            <label> Username
              <input type="text"
                value={this.state.username}
                onChange={this.handleUsernameChange} />
            </label>
            <label> Password
              <input type="password"
                value={this.state.password} 
                onChange={this.handlePasswordChange} />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </div>    
      </form>
    );
    
  }
}

export default LoginForm;