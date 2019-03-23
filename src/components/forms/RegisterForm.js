import React from "react";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";

class RegisterForm extends React.Component{
    state = {
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

    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
        
    onSubmit = () => {
        this.props.submit(this.state.data);
    }
    render(){
        const { data } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label htmlFor="name">Name</label>
                    <input  
                        id="name" 
                        name="name" 
                        placeholder="Daniel Oropeza Soria" 
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
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input  
                        id="phoneNumber" 
                        name="phoneNumber" 
                        placeholder="75985489" 
                        value={data.phoneNumber}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="email">Email</label>
                    <input  
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@example.com" 
                        value={data.email}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Form.Field>
                    <label htmlFor="password">Password</label>
                    <input  
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Make it secure" 
                        value={data.password}    
                        onChange={this.onChange}
                    />
                </Form.Field> 
                <Button primary>Register</Button>
            </Form>
        );
    }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired
}
export default RegisterForm;
