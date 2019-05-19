import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

class RegisterForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                ci: "",
                phoneNumber: "",
                email: "",
                password: "",
            },
            loading: false,
            errors: {}
        }
    }
    componentWillReceiveProps() {
        this.props.isThereData?this.setState({data: this.props.data}):console.log("no hay data");
    }
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        
    onSubmit = () => {
        this.props.submit(this.state.data);
    }
    componentDidUpdate() {
        if(this.props.isThereData && !this.state.loading){
            this.setState({data: this.props.data, loading: true});
        }
    }
    render(){
        const { data } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="name">Nombre</label>
                    <input  
                        id="name" 
                        name="name" 
                        placeholder="Jose Daniel Oropeza Soria" 
                        value={data.name}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="ci">CI</label>
                    <input  
                        id="ci" 
                        name="ci" 
                        placeholder="7711450" 
                        value={data.ci}    
                        onChange={this.onChange}
                    />
                </Form.Field>  
                <Form.Field>
                    <label htmlFor="phoneNumber">Telefono Celular</label>
                    <input  
                        id="phoneNumber" 
                        name="phoneNumber" 
                        placeholder="75985489" 
                        value={data.phoneNumber}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="email">Correo</label>
                    <input  
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="ejemplo@ejemplo.com" 
                        value={data.email}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="password">Contraseña</label>
                    <input  
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Hazlo seguro" 
                        value={data.password}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Button primary>Registrar</Button>
            </Form>
        );
    }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default RegisterForm;
