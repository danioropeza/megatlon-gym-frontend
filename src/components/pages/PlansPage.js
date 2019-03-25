import React from 'react'; 
import { Card, Icon, Image  } from 'semantic-ui-react';

import allDiciplines from "../../images/allDiciplines.jpg";
import threeDiciplines from "../../images/threeDiciplines.jpg";
import twoDiciplines from "../../images/twoDiciplines.jpg";
import oneDicipline from "../../images/oneDicipline.jpg";

class PlansPage extends React.Component {
    render() {
        return (
            <div className="ui container">
                <Card.Group>
                    <Card>
                        <Image src={allDiciplines} />
                        <Card.Content>
                            <Card.Header>Todas o nada</Card.Header>
                            <Card.Meta>Incluye todas las diciplinas</Card.Meta>
                            <Card.Description>
                                <label className="ui header">Mes>TLD*</label> 
                                    295 bs / <label className="ui header">3VS*</label>
                                    190 bs<br />
                                <label className="ui header">Semana></label>
                                    135 bs<br />
                                <label className="ui header">Dia></label>
                                    45 bs<br />
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="">
                            <Icon name='check square' />
                            Consumo de agua libre, 2 meriendas gratis a la semana.
                        </a>
                        </Card.Content>
                    </Card> 
                    <Card>
                        <Image src={threeDiciplines} />
                        <Card.Content>
                            <Card.Header>Trica poderosa</Card.Header>
                            <Card.Meta>Incluye tres diciplinas</Card.Meta>
                            <Card.Description>
                                <label className="ui header">Mes>TLD*</label> 
                                    270 bs / <label className="ui header">3VS*</label>
                                    175 bs<br />
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="">
                            <Icon name='check square' />
                            Consumo de agua libre, 1 merienda gratis a la semana.
                        </a>
                        </Card.Content>
                    </Card> 
                    <Card>
                        <Image src={twoDiciplines} />
                        <Card.Content>
                            <Card.Header>De a dos</Card.Header>
                            <Card.Meta>Incluye dos diciplinas</Card.Meta>
                            <Card.Description>
                                <label className="ui header">Mes>TLD*</label> 
                                    255 bs / <label className="ui header">3VS*</label>
                                    160 bs<br />
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="">
                            <Icon name='check square' />
                            Consumo de agua libre
                        </a>
                        </Card.Content>
                    </Card> 
                    <Card>
                        <Image src={oneDicipline} />
                        <Card.Content>
                            <Card.Header>Only</Card.Header>
                            <Card.Meta>Solamente incluye una diciplina</Card.Meta>
                            <Card.Description>
                                <label className="ui header">Mes>TLD*</label> 
                                    225 bs / <label className="ui header">3VS*</label>
                                    140 bs<br />
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="">
                            <Icon name='check square' />
                            Consumo de agua libre
                        </a>
                        </Card.Content>
                    </Card>  
                </Card.Group>
            </div>
        );
    }
}

export default PlansPage;

