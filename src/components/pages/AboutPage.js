import React from 'react'; 
import { Grid, Image, Message, Menu, Icon } from 'semantic-ui-react';
import megatlonImage from "../../images/megatlon.jpg";

class AboutPage extends React.Component {
    render() {
        return(
            <div className="ui container">
                <br />
                <Grid>
                    <Grid.Column width={5}>
                        <Image circular src={megatlonImage} />
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Message size="large">
                            Meglaton es un gimnasio ubicado en la maravillosa ciudad de Cochabamba para aquellas persona 
                            quienes desean mejorar su salud y condificion fisica, a diferencia de sus competencias Megatlon 
                            ofrece su servicio con el personal mejor capicitado. Asimismo se sirven diferentes tipos de platos 
                            de comida saludable de Lunes a Sabado.
                        </Message>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column textAlign='right' width={5}>
                        <Menu fluid vertical>
                        <Menu.Item className='header'>Nombre completo:</Menu.Item>
                        <Menu.Item className='header'>Telefono:</Menu.Item>
                        <Menu.Item className='header'>Propietario:</Menu.Item>
                        <Menu.Item className='header'>Fecha de fundacion:</Menu.Item>
                        <Menu.Item className='header'>Ubicacion:</Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Menu fluid vertical>
                        <Menu.Item>Megatlon GYM</Menu.Item>
                        <Menu.Item>4582359</Menu.Item>
                        <Menu.Item>Jose Daniel Oropeza Soria</Menu.Item>
                        <Menu.Item>14 de Marzo, 2000</Menu.Item>
                        <Menu.Item>Heroinas esquina San Martin</Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column>
                        <a href="https://www.google.com/search?rlz=1C1CHBF_esBO836BO836&q=megatlon+cochabamba&npsic=0&rflfq=1&rlha=0&rllag=-17390646,-66160655,658&tbm=lcl&ved=2ahUKEwiZ0dL5lZzhAhWFt1kKHSBgDosQtgN6BAgJEAQ&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:13393331257202259214;mv:!1m2!1d-17.38366890526465!2d-66.1372490083013!2m2!1d-17.402036324203284!2d-66.17359815818781!4m2!1d-17.39285284528466!2d-66.15542358324456!5i16">
                            <Icon name="map marker alternate"/>Ver ubicacion
                        </a>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default AboutPage;
