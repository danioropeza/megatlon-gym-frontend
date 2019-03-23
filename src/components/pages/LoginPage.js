import React from 'react'; 
import LoginForm from "../forms/LoginForm.js"
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
    submit = data => {
        console.log(data);
    };
    render() {
      return (
        <div className="ui container">
            <h1>Login Page</h1>
            <LoginForm submit={this.submit}/>
            <br />
            <Link to="/register">Not created an account yet?</Link>
        </div>
      )
    }
}
export default LoginPage;