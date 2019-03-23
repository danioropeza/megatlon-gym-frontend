import React from 'react'; 
import { Grid, Image, Message } from 'semantic-ui-react';
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
                            ofrece su servicio con el personal mejor capicitado.    
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default AboutPage;