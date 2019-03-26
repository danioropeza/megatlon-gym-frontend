import React from 'react'; 
import LoginForm from "../forms/LoginForm.js"
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
    submit = data => {
        console.log(data);
        var fileText = new Blob([data.email + " " + data.password], { type: "application/json" });
        var textURL = window.URL.createObjectURL(fileText);
        var downloadLink = document.createElement("a");
        downloadLink.download = "myJson.json";
        downloadLink.innerHTML = "";
        downloadLink.href = textURL;
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };
    render() {
      return (
        <div className="ui container">
            <br />
            <h1>Login</h1>
            <LoginForm submit={this.submit}/>
            <br />
            <Link to="/register">Todavia no estas registrado?</Link>
            <br />
        </div>
      )
    }
}
export default LoginPage;