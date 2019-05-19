import React from 'react'; 
import { Table, Icon, Button } from 'semantic-ui-react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class ClientAccountAdministration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clientAccounts: []
        }
    }
    componentDidMount() {
        Axios.get('http://localhost:8000/api/clients/')
             .then(res => {
                var clientAccounts = this.filterJustNameAndIDofClients(res.data)
                this.setState({clientAccounts})
             })
             .catch(error => console.log(error))
    }
    filterJustNameAndIDofClients(clientsAccount){
        return clientsAccount.map(clientData => {
            return clientData.name + " " + clientData.id;
        });
    }
    makeTableRowForClients(listOfClients){
        const spanIconsLeft = {
            float: "right",
        }
        return listOfClients.map(client => (<Table.Row key={client}>
                                                <Table.Cell>
                                                    <span onClick={this.seeClientAccountDetails.bind(this, client)}>{client}</span>
                                                    <span style={spanIconsLeft}>
                                                        <Icon onClick={this.editClientAccount.bind(this, client)} name="edit" />
                                                        <Icon onClick={this.deleteClientAccount.bind(this, client)} name="delete" />
                                                    </span>
                                                </Table.Cell>
                                            </Table.Row>));
    }
    seeClientAccountDetails(client) {
        var id = client.substring(1 + client.lastIndexOf(' '));
        this.props.history.push('/viewClientAccount', {
            id: id
        });
    }
    editClientAccount(client){
        var id = client.substring(1 + client.lastIndexOf(' '));
        this.props.history.push('/updateClientAccount', {
            id: id
        });
        
    }
    deleteClientAccount(client) {
        var id = client.substring(1 + client.lastIndexOf(' '));
        if(window.confirm("Estas seguro que deseas eliminar este cliente?")){
            Axios.delete('http://localhost:8000/api/client/' + id + '/delete/')
                 .then(res => { 
                    var clientAccountsListWithoutClientDeleted = this.state.clientAccounts;
                    for(var i=0; i<clientAccountsListWithoutClientDeleted.length; i++){
                        var idObtained = clientAccountsListWithoutClientDeleted[i].substring(1 + clientAccountsListWithoutClientDeleted[i].lastIndexOf(' '));
                        if(id == idObtained){
                            clientAccountsListWithoutClientDeleted.splice(i, 1); 
                        }
                    }
                    this.setState({clientAccounts: clientAccountsListWithoutClientDeleted});
                 })
                 .catch(error => console.log(error))
        }
    }
    render() {
        var clientAccountsAux = this.makeTableRowForClients(this.state.clientAccounts);
        return(
            <div className="ui container">
                <br />
               <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Cuentas de clientes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {clientAccountsAux}
                </Table.Body>
            </Table>
            </div>
        );
    }
}
export default ClientAccountAdministration;
