import React from 'react'; 
import RegisterForm from "../forms/RegisterForm";
import { Link } from "react-router-dom";
import axios from 'axios';

class RegisterPage extends React.Component {
    submit = data => {
        axios.post('http://localhost:8000/api/client/new', data)
             .then(res => alert("Se creo un nuevo cliente"))
             .catch(error => console.log(error))
    };
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Registro</h1>
                    <RegisterForm submit={this.submit} />
                    <br />
                    <Link className="ui button" to="/">Cancelar</Link>
                    <br />
                </div>
            </div>
        );
    }
}

export default RegisterPage;