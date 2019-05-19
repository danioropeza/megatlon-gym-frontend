import React from 'react'; 
import RegisterForm from "../forms/RegisterForm";
import { Button } from 'semantic-ui-react';
import Axios from 'axios';

class UpdateClientAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            ci: "",
            cellphone: "",
            email: "",
            password: "",
            clientAccountDetails: {},
            isClientAccountDetailsEmpty: false
        }
    }
    componentWillMount() {
        var id = this.props.location.state.id;
        Axios.get('http://localhost:8000/api/client/' + id)
             .then(res => {
                this.setState({clientAccountDetails: res.data, isClientAccountDetailsEmpty: true});
             })
             .catch(error => console.log(error))
    }
    submit = data => {
        var id = this.props.location.state.id;
        Axios.put('http://localhost:8000/api/client/' + id + '/update/', data)
             .then(res => {
                alert("Se actulizaron los datos");
                this.props.history.goBack()
             })
             .catch(error => console.log("error"))
    };
    returnToLastPage() {
        this.props.history.goBack();
    }
    render(){
        return(            
            <div>
                <div className="ui container">
                    <br />
                    <h1>Actulizar datos de cuentas de cliente</h1>
                    <RegisterForm submit={this.submit} isThereData={this.state.isClientAccountDetailsEmpty} data={this.state.clientAccountDetails} />
                    <br />
                    <Button onClick={this.returnToLastPage.bind(this)} size="small" color="green">Cancelar</Button>
                    <br />
                </div>
            </div>
        );
    }
}

export default UpdateClientAccount;