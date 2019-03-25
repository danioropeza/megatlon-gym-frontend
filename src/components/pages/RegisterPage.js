import React from 'react'; 
import RegisterForm from "../forms/RegisterForm";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
    submit = data => {
        console.log(data);
        var fileText = new Blob([data.name + " " + data.ci + " " + data.phoneNumber + " " + data.email + " " + data.password], { type: "application/json" });
        var textURL = window.URL.createObjectURL(fileText);
        var downloadLink = document.createElement("a");
        downloadLink.x   = "myJson.json";
        downloadLink.innerHTML = "";
        downloadLink.href = textURL;
        document.body.appendChild(downloadLink);
        downloadLink.click();
    };
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro</h1>
                    <RegisterForm submit={this.submit}/>
                    <br />
                    <Link className="ui button" to="/">Cancelar</Link>
                    <br />
                </div>
            </div>
        );
    }
}

export default LoginPage;