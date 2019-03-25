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
            <h1>Login</h1>
            <LoginForm submit={this.submit}/>
            <br />
            <Link to="/register">Todavia no estas registrado?</Link>
        </div>
      )
    }
}
export default LoginPage;