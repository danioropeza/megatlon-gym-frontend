import React from 'react'; 
import { List, Button } from 'semantic-ui-react';
import Axios from 'axios';

class ViewClientAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            ci: "",
            phoneNumber: "",
            email: "",
            password: ""
        }
    }
    componentWillMount() {
        var id = this.props.location.state.id;
        Axios.get('http://localhost:8000/api/client/' + id)
             .then(res => {
                var { id, name, ci, phoneNumber, mail, password } = res.data;
                this.setState({
                    id: id,
                    name: name, 
                    ci: ci,
                    phoneNumber: phoneNumber,
                    mail: mail,
                    password: password
                })
             })
             .catch(error => console.log(error))
    }
    returnToLastPage() {
        this.props.history.goBack();
    }
    render() {
        var { name, ci, phoneNumber, email, password } = this.state;
        return(
            <div className="ui container">
                <br />
                <List>
                    <List.Item><strong>Nombre: </strong>{name}</List.Item>
                    <List.Item><strong>CI: </strong>{ci}</List.Item>
                    <List.Item><strong>phoneNumber: </strong>{phoneNumber}</List.Item>
                    <List.Item><strong>Email: </strong>{email}</List.Item>
                    <List.Item><strong>Password: </strong>{password}</List.Item>
                </List>
                <Button size='small' color='green' onClick={this.returnToLastPage.bind(this)}>
                    volver
                </Button>
            </div>
        );
    }
}
export default ViewClientAccount;
