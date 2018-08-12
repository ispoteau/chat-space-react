import React from 'react';
import Header from './header'
import LoginForm from './loginform'


class Login extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <LoginForm/>
      </div>
    );
  }
}

export default Login;